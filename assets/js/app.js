// ==========================================
// 1. INISIALISASI SUPABASE
// ==========================================
// PERHATIAN: URL tidak boleh diakhiri dengan /rest/v1/
const SUPABASE_URL = "https://axehgewoxgzcjxrnoeix.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZWhnZXdveGd6Y2p4cm5vZWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMjcwMTMsImV4cCI6MjA5ODcwMzAxM30.SlNV5YqzMJ5nZ2Yj5YUSmzlWhtUzpgd3heOaby4zGPc";

// Gunakan nama variabel supabaseClient agar seragam
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("✅ File app.js berhasil dimuat dan Supabase terhubung!");

// ==========================================
// 2. FUNGSI TES KONEKSI
// ==========================================
async function testConnection() {
    // Catatan: Jika sebelumnya kita membuat tabel bernama 'users', gunakan 'users'. 
    // Ganti menjadi 'pegawai' HANYA jika Anda membuat tabelnya dengan nama tersebut di Supabase.
    const { data, error } = await supabaseClient
        .from("users") 
        .select("*");

    if (error) {
        console.error("❌ Error ambil data dari Supabase:", error.message);
        return;
    }

    console.log("✅ Data Supabase berhasil ditarik:", data);
}

// Jalankan tes saat file dimuat
testConnection();