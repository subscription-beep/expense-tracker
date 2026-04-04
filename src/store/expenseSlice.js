import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../lib/supabaseClient';

const initialState = {
  expenses: [],
  status: 'idle',
  error: null,
};

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  const response = await supabase
    .from('expenses')
    .select('*')
    .order('date', { ascending: false })
    .order('created_at', { ascending: false });

  if (response.error) throw response.error;
  return response.data;
});

export const addExpense = createAsyncThunk('expenses/addExpense', async (payload) => {
  const { title, amount, category, date, user_id } = payload;

  const response = await supabase.from('expenses').insert([
    {
      title,
      amount,
      category,
      date,
      user_id,
    },
  ]).select('*').single();

  if (response.error) throw response.error;
  return response.data;
});

export const updateExpense = createAsyncThunk('expenses/updateExpense', async ({ id, title, amount, category, date }) => {
  const response = await supabase
    .from('expenses')
    .update({ title, amount, category, date })
    .eq('id', id)
    .select('*')
    .single();

  if (response.error) throw response.error;
  return response.data;
});

export const deleteExpense = createAsyncThunk('expenses/deleteExpense', async (id) => {
  const response = await supabase.from('expenses').delete().eq('id', id).select('*').single();
  if (response.error) throw response.error;
  return id;
});

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExpenses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.expenses = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.unshift(action.payload);
      })
      .addCase(updateExpense.fulfilled, (state, action) => {
        const idx = state.expenses.findIndex((item) => item.id === action.payload.id);
        if (idx !== -1) {
          state.expenses[idx] = action.payload;
        }
      })
      .addCase(deleteExpense.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter((item) => item.id !== action.payload);
      });
  },
});

export const selectAllExpenses = (state) => state.expenses.expenses;
export const selectExpensesStatus = (state) => state.expenses.status;
export const selectTotalExpenses = (state) =>
  state.expenses.expenses.reduce((sum, expense) => sum + Number(expense.amount), 0);

export default expenseSlice.reducer;
