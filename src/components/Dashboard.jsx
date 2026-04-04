import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../lib/supabaseClient';
import {
  fetchExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
  selectAllExpenses,
  selectTotalExpenses,
} from '../store/expenseSlice';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import EditModal from './EditModal';
import { DollarSign, TrendingUp, Calendar, LogOut, Menu, X, Plus } from 'lucide-react';

export default function Dashboard({ session }) {
  const dispatch = useDispatch();
  const expenses = useSelector(selectAllExpenses);
  const total = useSelector(selectTotalExpenses);
  const [editingExpense, setEditingExpense] = useState(null);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    dispatch(fetchExpenses()).catch((err) => setError(err.message));
  }, [dispatch]);

  const handleAdd = async (expenseData) => {
    const user_id = session.user.id;
    try {
      await dispatch(addExpense({ ...expenseData, user_id })).unwrap();
      setShowAddForm(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSave = async (updatedExpense) => {
    try {
      await dispatch(updateExpense(updatedExpense)).unwrap();
      setEditingExpense(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteExpense(id)).unwrap();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const recentExpenses = expenses.slice(0, 3);
  const monthlyTotal = expenses
    .filter(exp => {
      const expDate = new Date(exp.date);
      const now = new Date();
      return expDate.getMonth() === now.getMonth() && expDate.getFullYear() === now.getFullYear();
    })
    .reduce((sum, exp) => sum + Number(exp.amount), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 lg:flex lg:items-stretch">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white p-2 rounded-lg shadow-lg border border-white/20"
        >
          {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-white/95 backdrop-blur-sm border-r border-white/20 transform transition-transform duration-300 ease-in-out ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-auto lg:h-full`}>
        <div className="flex flex-col min-h-screen p-6">          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ExpenseTracker
            </h1>
          </div>

          <div className="space-y-4 flex-1">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-sm text-slate-600">Total Expenses</p>
                  <p className="text-2xl font-bold text-slate-800">${total.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
              <div className="flex items-center gap-3">
                <Calendar className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-sm text-slate-600">This Month</p>
                  <p className="text-2xl font-bold text-slate-800">${monthlyTotal.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Recent Expenses</h3>
              <div className="space-y-2">
                {recentExpenses.map((expense) => (
                  <div key={expense.id} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                    <div>
                      <p className="font-medium text-slate-800">{expense.title}</p>
                      <p className="text-sm text-slate-500">{expense.category}</p>
                    </div>
                    <p className="font-semibold text-slate-800">${Number(expense.amount).toFixed(2)}</p>
                  </div>
                ))}
                {recentExpenses.length === 0 && (
                  <p className="text-sm text-slate-500 text-center py-4">No expenses yet</p>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 w-full p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 flex-1 p-6">
        <div className="max-w-6xl mx-auto">          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-800">Dashboard</h2>
              <p className="text-slate-600 mt-1">Welcome back! Here's your expense overview.</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add Expense
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {/* Add Form Modal */}
          {showAddForm && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-800">Add New Expense</h3>
                    <button
                      onClick={() => setShowAddForm(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <ExpenseForm onAdd={handleAdd} />
                </div>
              </div>
            </div>
          )}

          {/* Expense List */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <ExpenseList expenses={expenses} onEdit={setEditingExpense} onDelete={handleDelete} />
          </div>

          {/* Edit Modal */}
          {editingExpense && (
            <EditModal
              expense={editingExpense}
              onClose={() => setEditingExpense(null)}
              onSave={handleSave}
            />
          )}
        </div>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </main>
    </div>
  );
}
