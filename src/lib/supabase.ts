
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
// These environment variables should be added through the Lovable Supabase integration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL or Anon Key is missing. Please connect to Supabase via the Lovable integration.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
