// Supabase client initialization
// This file is used to initialize the Supabase client, which is then used in the other files to interact with the Supabase database.

import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbeadmbosfnaxmunkoft.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiZWFkbWJvc2ZuYXhtdW5rb2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MTg5NjksImV4cCI6MjA1NDI5NDk2OX0.3e-jUnhiZiVdMlmjq4-sWfZ-ZcTd-Y3KuSWX4JrFcdg';


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})