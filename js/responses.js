function getBotResponse(input) {
    input = input.toLowerCase();

    if (input == "halo") {
        return "Halo. Terima kasih sudah menghubungi Auto2000. Saya CS - Support, ada yang bisa saya bantu?";
    } else if (input == "sampai jumpa") {
        return "Terima kasih telah menghubungi Auto2000, sampai jumpa!";
    } else if (input == "cek promo menarik"){
        return "Untuk promo - promo menarik bulan ini, kami Memberikan 1 unit mobil Toyota Fortuner dengan harga yang menarik yaitu Rp 100.000.000";
    } else if (input == "cek servis dan perawatan"){
        return "Untuk model-model baru seperti Agya, Calya, Sienta, Innova, dan Fortuner mendapatkan program servis gratis untuk jarak tempuh 50.000 km atau kurun waktu 4 tahun.Jika ingin mengetahui info yang lebih lanjut dapat menghubungi kami dengan cara mengklik Cek Servis dan Perawatan di atas. ";
    }else {
        return "Mohon maaf untuk saat ini, info yang Auto Family butuhkan dapat dibantu oleh Tasia.";
    }
}