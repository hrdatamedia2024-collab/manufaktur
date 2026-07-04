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