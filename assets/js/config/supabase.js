const SUPABASE_URL = "https://axehgewoxgzcjxrnoeix.supabase.co/rest/v1/";

const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZWhnZXdveGd6Y2p4cm5vZWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMjcwMTMsImV4cCI6MjA5ODcwMzAxM30.SlNV5YqzMJ5nZ2Yj5YUSmzlWhtUzpgd3heOaby4zGPc";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);