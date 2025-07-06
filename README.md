# 🌸 AnnaYanami-Bot

> Bot WhatsApp Multi-Fungsi dengan Sistem Plugin Modern (ESM)  
> Dibuat dengan ❤️ oleh Fahrizal

![Anna Yanami](https://i.ibb.co/BTc6v6Z/annayanami.jpg)

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
git clone https://github.com/username/AnnaYanami-Bot
cd AnnaYanami-Bot

2. Instal Dependensi

npm install

3. Jalankan Bot

node index.js

> 🔑 Pastikan Anda sudah mendapatkan session credentials dari pairing code login.




---

🔧 Konfigurasi

Edit file settings.js untuk menyesuaikan:

global.owner = ["628xxx"] // nomor owner
global.botname = "AnnaYanami"
global.sessionName = "session"
global.autoread = true


---

🧩 Struktur Plugin

Letakkan plugin di dalam folder ./plugins

Gunakan ekstensi .mjs

Contoh struktur plugin:


// plugins/tools/ping.mjs
export let help = ['ping']
export let tags = ['tools']
export let command = /^ping$/i

export async function operate(m, { conn }) {
  await conn.reply(m.chat, 'Pong!', m)
}


---

📢 Grup Update & Support

Bergabunglah di grup untuk update fitur, diskusi, atau laporan bug:
📬 Gabung Grup WhatsApp


---

👤 Developer

Fahrizal (Creator)
📍 Indonesia
💬 WhatsApp



---

📄 Lisensi

MIT License — Silakan pakai, modifikasi, dan kembangkan dengan bebas. Jangan lupa kasih kredit ✨


---

> "Anna selalu hadir menemani, bahkan saat kamu sedang mengetik .menu 💗"
