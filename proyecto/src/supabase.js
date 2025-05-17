// src/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xijfklgpipaoqayjgwua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhpamZrbGdwaXBhb3FheWpnd3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzgyMzgsImV4cCI6MjA2MzAxNDIzOH0.YeKkvWE7wTXTM303K3b6hTlxtHUyTvjEd19IumM02-8';
export const supabase = createClient(supabaseUrl, supabaseKey);