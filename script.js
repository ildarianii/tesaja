document.body.classList.add('locked');

AOS.init({
    once: false, 
    mirror: true,
    startEvent: 'DOMContentLoaded' // Memastikan AOS siap dimuat
});

function bukaUndangan() {
    const cover = document.getElementById("coverPage");
    const song = document.getElementById("weddingSong");
    const musicBtn = document.getElementById("musicBtn");
    
    // Buka halaman cover (kedip menghilang)
    cover.classList.add("cover-opened");
    
    // Buka kunci scroll layar utama
    document.body.classList.remove('locked');
    
    // TRIGER ANIMASI TEKS HERO
    // Menambahkan class ke body agar teks mulai muncul berurutan
    document.body.classList.add("invitation-open");
    
    // Putar musik otomatis
    song.play();
    musicBtn.innerHTML = "⏸️";
    musicBtn.classList.add("rotate");

    // Biarkan AOS me-refresh bagian bawah (Mempelai & Acara) saat di-scroll nanti
    setTimeout(() => {
        AOS.refresh();
    }, 500);
}

// --- FUNGSI TOMBOL BUKA UNDANGAN ---
function bukaUndangan() {
    const cover = document.getElementById("coverPage");
    const song = document.getElementById("weddingSong");
    const musicBtn = document.getElementById("musicBtn");
    
    // 1. Cover hitam memudar halus
    cover.classList.add("cover-opened");
    
    // 2. Memicu sistem waktu animasi intro
    document.body.classList.add("invitation-open");
    
    // 3. Musik mulai berputar
    song.play();
    musicBtn.innerHTML = "⏸️";
    musicBtn.classList.add("rotate");

    // 4. Buka kunci scroll setelah seluruh rangkaian teks & kilatan selesai (detik ke-11)
    setTimeout(() => {
        document.body.classList.remove('locked');
        AOS.refresh(); 
    }, 11000); 
}

function ambilNamaTamu() {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('to'); // Membaca teks setelah '?to=' di link
    
    if (nama) {
        document.getElementById("namaTamu").innerText = nama;
    }
}
// Jalankan fungsi pembaca nama tamu saat halaman dimuat
window.onload = ambilNamaTamu;


// --- COUNTDOWN LOGIC ---
const weddingDate = new Date("Jun 8, 2026 10:00:00").getTime();

setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    if(document.getElementById("days")) {
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }
}, 1000);

const song = document.getElementById("weddingSong");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
    if (song.paused) {
        song.play();
        musicBtn.innerHTML = "⏸️";
        musicBtn.classList.add("rotate");
    } else {
        song.pause();
        musicBtn.innerHTML = "🎵";
        musicBtn.classList.remove("rotate");
    }
}

function kirimRSVP() {
    const nama = document.getElementById("rsvpNama").value;
    const status = document.querySelector('input[name="statusHadir"]:checked').value;

    if (!nama) {
        alert("Tolong isi nama dulu ya 😊");
        return;
    }

    const pesan = `Halo, saya ${nama}. Status kehadiran saya: ${status}. Terima kasih atas undangannya 💐`;

    const nomorWA = "6287810916064";

    const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

    window.open(linkWA, "_blank");
}

function tambahUcapanLokal() {
    const nama = document.getElementById("namaUcapan").value;
    const ucapan = document.getElementById("teksUcapan").value;
    const box = document.getElementById("boxAliranUcapan");

    if (!nama || !ucapan) {
        alert("Isi nama dan ucapan dulu ya 😊");
        return;
    }

    const item = document.createElement("div");

    item.style.marginBottom = "15px";
    item.style.padding = "12px";
    item.style.background = "#ffffff";
    item.style.borderRadius = "10px";
    item.style.border = "1px solid #cbd6ce";

    item.innerHTML = `
        <strong>${nama}</strong><br>
        <span>${ucapan}</span>
    `;

    box.prepend(item);

    document.getElementById("namaUcapan").value = "";
    document.getElementById("teksUcapan").value = "";
}