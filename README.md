# 💰 ExpenseTracker

A modern, full-stack expense tracking application built with React, Redux Toolkit, Supabase, and Tailwind CSS. Track your personal finances with a beautiful, responsive interface that works seamlessly across all devices.

![ExpenseTracker Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=ExpenseTracker+Preview)

## ⚡ Quick Commands

```bash
git clone <repository-url>
cd expensetracker
npm install
# Add your Supabase credentials to .env
npm run dev
```

**That's it!** Your app will be running at `http://localhost:5174` 🚀

## ✨ Features

### 🔐 Authentication
- **Secure User Registration & Login** - Powered by Supabase Auth
- **Email Verification** - Account security with email confirmation
- **Session Management** - Automatic session handling and persistence

### 💳 Expense Management
- **Add Expenses** - Quick and easy expense entry with categories
- **Edit & Delete** - Modify or remove expenses with confirmation
- **Categorization** - Predefined categories (Food, Transportation, Entertainment, etc.)
- **Date Tracking** - Record expenses with specific dates
- **Real-time Totals** - Automatic calculation of total and monthly expenses

### 📊 Dashboard & Analytics
- **Interactive Dashboard** - Overview of your financial data
- **Monthly Insights** - Track spending patterns by month
- **Recent Expenses** - Quick view of latest transactions
- **Visual Indicators** - Color-coded categories and status badges

### 🎨 Modern UI/UX
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode Ready** - Built with modern design principles
- **Smooth Animations** - Polished transitions and hover effects
- **Glassmorphism Effects** - Modern backdrop blur and transparency
- **Gradient Themes** - Beautiful blue-to-purple gradient design

### 🛠️ Technical Features
- **Real-time Updates** - Instant synchronization across devices
- **Offline Support** - Graceful error handling and loading states
- **Form Validation** - Client-side validation with helpful error messages
- **Type Safety** - Built with modern JavaScript practices

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **Vite** - Lightning-fast build tool and dev server
- **Redux Toolkit** - Efficient state management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icons

### Backend & Database
- **Supabase** - Open-source Firebase alternative
- **PostgreSQL** - Robust relational database
- **Row Level Security** - Database-level access control

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing with Autoprefixer
- **Vite Plugins** - Optimized development experience

## � Quick Start Commands

Get the project running in 5 minutes with these commands:

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/expensetracker.git
cd expensetracker

# 2. Install all dependencies
npm install

# 3. Create environment file with your Supabase credentials
cp .env.example .env
# Edit .env with your actual Supabase URL and API key

# 4. Start the development server
npm run dev

# 5. Open your browser to http://localhost:5174
```

## 🛠️ Development Commands

All available npm scripts from `package.json`:

```bash
# Start development server (Vite) - with hot reload
npm run dev

# Build for production - creates optimized dist/ folder
npm run build

# Preview production build locally before deployment
npm run preview
```

### Additional Useful Commands

```bash
# Clean reinstall (if you have dependency issues)
rm -rf node_modules package-lock.json && npm install

# Check Node.js and npm versions
node --version && npm --version

# Clear npm cache (if installation issues persist)
npm cache clean --force

# Install specific version of a package
npm install package-name@version

# Update all dependencies to latest versions
npm update
```

## 📊 Database Setup Commands

After setting up Supabase, run this SQL in your Supabase SQL Editor:

```sql
-- Copy and paste the contents of setup.sql here
-- This creates the expenses table and RLS policies
```

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/expensetracker.git
cd expensetracker
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Supabase Setup

#### Create a Supabase Project
1. Visit [supabase.com](https://supabase.com) and sign up for a free account
2. Click "New Project" and fill in your project details
3. Wait for the project to be fully initialized (usually takes 2-3 minutes)

#### Get Your API Keys
1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (something like `https://your-project-id.supabase.co`)
   - **anon/public key** (starts with `eyJ...`)

#### Create Environment File
Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_project_url_here
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**Example:**
```env
VITE_SUPABASE_URL=https://abcdefghijk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 4. Database Setup

#### Run the SQL Setup Script
1. In your Supabase dashboard, navigate to **SQL Editor**
2. Copy and paste the contents of `setup.sql` from this repository
3. Click **Run** to execute the SQL commands

This will create:
- `expenses` table with proper schema
- Row Level Security (RLS) policies
- Indexes for optimal performance

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5174`

## 📖 Usage Guide

### Getting Started

1. **Sign Up**: Create a new account with your email
2. **Verify Email**: Check your email and click the verification link
3. **Log In**: Use your credentials to access the dashboard

### Adding Your First Expense

1. Click the **"Add Expense"** button on the dashboard
2. Fill in the expense details:
   - **Title**: Brief description (e.g., "Coffee at Starbucks")
   - **Amount**: Cost in dollars (e.g., 5.50)
   - **Category**: Select from dropdown (Food, Transportation, etc.)
   - **Date**: When the expense occurred
3. Click **"Add Expense"** to save

### Managing Expenses

- **Edit**: Click the edit button next to any expense to modify it
- **Delete**: Click the delete button to remove an expense
- **View Totals**: Check the sidebar for total and monthly spending

### Quick Demo

For testing purposes, use the **"Quick Demo"** button on the login page to instantly access the app with sample data.

## 📁 Project Structure

```
expensetracker/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── AuthScreen.jsx     # Login/signup form
│   │   ├── Dashboard.jsx      # Main dashboard
│   │   ├── ExpenseForm.jsx    # Add expense form
│   │   ├── ExpenseList.jsx    # Expenses table
│   │   ├── EditModal.jsx      # Edit expense modal
│   │   └── ...
│   ├── lib/
│   │   └── supabaseClient.js  # Supabase configuration
│   ├── store/               # Redux store
│   │   ├── expenseSlice.js     # Expense state management
│   │   └── store.js           # Store configuration
│   ├── index.css           # Global styles
│   └── main.jsx            # App entry point
├── setup.sql              # Database schema
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like Vercel, Netlify, or GitHub Pages.

### Environment Variables for Production

Make sure to set the environment variables in your hosting platform:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 🔧 Troubleshooting

### Common Issues & Solutions

**❌ Port 5174 already in use**
```bash
# Kill process using port 5174
npx kill-port 5174
# Or run on different port
npm run dev -- --port 3000
```

**❌ Supabase connection errors**
- Check your `.env` file has correct `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Ensure your Supabase project is active and not paused
- Verify RLS policies are set up correctly in Supabase dashboard

**❌ Build fails**
```bash
# Clear cache and reinstall
rm -rf node_modules .vite dist
npm install
npm run build
```

**❌ Environment variables not loading**
- Ensure `.env` file is in root directory (same level as `package.json`)
- Restart development server after adding environment variables
- Check variable names match exactly (case-sensitive)

**❌ Database table not found**
- Run the `setup.sql` script in Supabase SQL Editor
- Check table was created in Supabase dashboard under Tables

### Getting Help

If you encounter issues:
1. Check the [Issues](https://github.com/yourusername/expensetracker/issues) page
2. Search existing solutions
3. Create a new issue with:
   - Error messages
   - Your environment (OS, Node version, browser)
   - Steps to reproduce
   - Screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Supabase** for the amazing backend-as-a-service platform
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icon set
- **React** community for the excellent documentation and ecosystem

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: your.email@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/expensetracker/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/expensetracker/discussions)

---

**Made with ❤️ using React, Supabase, and Tailwind CSS**

⭐ Star this repo if you found it helpful!
```

Open [http://localhost:5174](http://localhost:5174) in your browser.

## Usage

1. **Signup/Login**: Create an account or log in.
2. **Add Expenses**: Use the form to add title, amount, category, date.
3. **View Expenses**: See all expenses in the table, sorted latest first.
4. **Edit/Delete**: Click edit or delete buttons on each row.
5. **Total**: View total expenses at the top.

## Project Structure

```
src/
├── components/
│   ├── AuthScreen.jsx      # Login/signup form
│   ├── Dashboard.jsx       # Main dashboard with total, form, list
│   ├── ExpenseForm.jsx     # Form to add expenses
│   ├── ExpenseList.jsx     # Table of expenses
│   └── EditModal.jsx       # Modal to edit expenses
├── lib/
│   └── supabaseClient.js   # Supabase client setup
├── store/
│   ├── store.js            # Redux store
│   └── expenseSlice.js     # Redux slice with thunks
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Tailwind styles
```

## Troubleshooting

### Supabase Errors (404, 500, 429, 400)

If you see errors like:
- `404 Not Found` on auth endpoints
- `500 Internal Server Error`
- `429 Too Many Requests`
- `400 Bad Request`

**Cause**: The provided Supabase credentials in the assignment may be placeholders or the project is inactive.

**Solution**:
1. Create your own Supabase project (free).
2. Use your own `Project URL` and `anon public` key in `.env`.
3. Run `setup.sql` in your Supabase SQL Editor.
4. Restart the app.

### Other Issues

- Ensure `.env` is in the root directory.
- Check browser console for errors.
- Verify all dependencies are installed.

## Assignment Requirements Met

- ✅ Vite setup with React
- ✅ Supabase auth integration
- ✅ Database schema with RLS policies
- ✅ Redux Toolkit with async thunks for CRUD
- ✅ Sorting expenses by date descending
- ✅ Total expenses calculation
- ✅ Tailwind UI with form, list, modal
- ✅ Hooks: useState, useEffect, useRef
- ✅ Clean, modular code ready for GitHub

## License

This project is for educational purposes.