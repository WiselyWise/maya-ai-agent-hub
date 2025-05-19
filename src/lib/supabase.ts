
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client with a fallback for development/testing
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client when credentials are missing
let supabaseInstance;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please connect to Supabase via the Lovable integration.');
  
  // Create a mock client that doesn't throw errors but logs operations
  supabaseInstance = {
    from: (table) => ({
      insert: async () => {
        console.log(`Mock insert into ${table} - Supabase not connected`);
        return { error: null };
      },
      select: async () => {
        console.log(`Mock select from ${table} - Supabase not connected`);
        return { data: [], error: null };
      },
      update: async () => {
        console.log(`Mock update in ${table} - Supabase not connected`);
        return { error: null };
      },
      delete: async () => {
        console.log(`Mock delete from ${table} - Supabase not connected`);
        return { error: null };
      }
    }),
    auth: {
      signUp: async () => {
        console.log('Mock sign up - Supabase not connected');
        return { data: null, error: null };
      },
      signIn: async () => {
        console.log('Mock sign in - Supabase not connected');
        return { data: null, error: null };
      },
      signOut: async () => {
        console.log('Mock sign out - Supabase not connected');
        return { error: null };
      }
    }
  };
} else {
  // Create the real Supabase client when credentials are available
  supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
}

export const supabase = supabaseInstance;
