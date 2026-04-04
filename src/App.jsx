import { useEffect, useState } from 'react';
import { supabase } from './lib/supabaseClient';
import AuthScreen from './components/AuthScreen';
import Dashboard from './components/Dashboard';

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data?.session ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, payload) => {
      setSession(payload?.session ?? null);
    });

    return () => {
      listener?.subscription?.unsubscribe?.();
    };
  }, []);

  if (!session) {
    return <AuthScreen onLoginSuccess={setSession} />;
  }

  return <Dashboard session={session} />;
}

export default App;
