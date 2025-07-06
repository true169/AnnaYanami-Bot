# 🌸 AnnaYanami-Bot

> Bot WhatsApp Multi-Fungsi dengan Sistem Plugin Modern (ESM)  
> Dibuat dengan ❤️ oleh Fahrizal

![Anna Yanami](https://files.catbox.moe/pzmgau.jpg)

---

## ✨ Fitur Unggulan
- 🔌 Sistem Plugin Type ESM (modular & ringan)
- 🤖 Fitur AI, Tools, Fun, Downloader, dll
- 💬 Auto-reply cerdas & personalisasi pengguna
- 🧩 Mudah dikembangkan — tinggal tambah plugin!
- 🌍 Dukungan Multi-Prefix & NoPrefix

---

## 🚀 Instalasi Cepat

### 1. Clone Repo
```bash
git clone https://github.com/Fahrizal/AnnaYanami-Bot
cd AnnaYanami-Bot

2. Instal Dependensi

npm install

3. Jalankan Bot

node index.js


---

🔧 Konfigurasi

Edit file settings.js untuk menyesuaikan:

global.owner = ["628xxx"] // nomor owner
global.namebot = "AnnaYanami"

> ⚙️ Pengaturan lainnya silakan cek langsung di file settings.js.




---

🧩 Struktur Plugin

Letakkan plugin di dalam folder ./plugins

Gunakan ekstensi .js

Contoh struktur plugin:


let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Kode Anda
}
handler.help = ["help"]
handler.tags = ["tags menu"]
handler.command = ["command"]

export default handler


---

📢 Grup Update & Support

Bergabunglah di grup untuk update fitur, diskusi, atau laporan bug:
Lihat Di main.js


---

👤 Developer

Fahrizal (Creator)
📍 Indonesia
💬 WhatsApp (isi sendiri ya)



---

📄 Lisensi

MIT License — Silakan pakai, modifikasi, dan kembangkan dengan bebas. Jangan lupa kasih kredit ✨


---

> "Anna selalu hadir menemani, bahkan saat kamu sedang mengetik .menu 💗"
