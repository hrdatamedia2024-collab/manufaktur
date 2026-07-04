// ==========================================
// 1. INISIALISASI SUPABASE (TARUH PALING ATAS)
// ==========================================
const SUPABASE_URL = 'https://axehgewoxgzcjxrnoeix.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4ZWhnZXdveGd6Y2p4cm5vZWl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMjcwMTMsImV4cCI6MjA5ODcwMzAxM30.SlNV5YqzMJ5nZ2Yj5YUSmzlWhtUzpgd3heOaby4zGPc'; 

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("✅ Supabase untuk CUTI GO! siap digunakan!");

// ==========================================
// 2. FUNGSI-FUNGSI APLIKASI (Di bawahnya)
// ==========================================

// Contoh untuk mencoba mengambil data dari tabel users (Tes Koneksi)
async function tesKoneksi() {
  const { data, error } = await supabaseClient
    .from('users')
    .select('*');

  if (error) {
    console.error("❌ Koneksi gagal atau RLS aktif:", error.message);
  } else {
    console.log("✅ Berhasil terhubung! Data:", data);
  }
}

// Panggil fungsi untuk mengetes saat halaman dimuat
tesKoneksi();
async function testConnection() {

    const { data, error } = await supabase
        .from("pegawai")
        .select("*");

    if (error) {
        console.error(error);
        return;
    }

    console.log(data);

}

testConnection();