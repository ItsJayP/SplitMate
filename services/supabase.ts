// Supabase client initialization
// This file is used to initialize the Supabase client, which is then used in the other files to interact with the Supabase database.

import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage'

const SUPABASE_URL = 'https://vbeadmbosfnaxmunkoft.supabase.co';
const SUPABASE_ANON_KEY = 'process.env.SUPABASE_KEY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})