import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://oixcqbkwyrtosqbarcxv.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9peGNxYmt3eXJ0b3NxYmFyY3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNDc5MjUsImV4cCI6MjA1MzcyMzkyNX0.y9lvqhDl_fKCdE3Wq0rzLHScn6HVSuYs1sNlhKHxXs0`;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
