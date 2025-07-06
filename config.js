import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

//*============== NOMOR ==============*\\
global.nomorbot = '6281949448422' //Nomor Bot
global.nomorown = '6287860644193' //Nomor Ownerlobal.namebot 
global.nameown = 'Takashi' // Nama Owner

//*============== Owner ==============*\\
global.owner = [
  ['6287860644193', 'Taka?', true],
  ]//Nomor owner 

global.mods = ['', '']
global.prems = ['', '', '']

//*============= API Prefix ==========*\\
global.APIs = { 
  // name: 'https://website'
}
global.APIKeys = { // APIKey Here*
  // 'https://website': 'apikey'
}
//watermark\\
global.wm = 'AnnaBot' //Main Watermark
global.titlebot = 'Anna-Botz'
global.namebot = 'Anna-Botz' // ini nama bot nya di all

//*======== Icon ============*\\
//icon rasio 1:1 ↓↓↓↓
global.imgbot ='https://telegra.ph/file/082a4ae9d2a7c28e72efd.jpg'
//larger rasio 16:9 ↓↓↓↓
global.imgbot2 = 'https://telegra.ph/file/ebc31e6041812a4241a91.jpg'
//channels
global.sch = 'https://whatsapp.com/channel/0029VbA6ZQp72WTpwhiTlo3W'

//*========= handler ========*\\
global.wel =
  'https://telegra.ph/file/c0b8126d1c948e3d29837.mp4'
global.good = 
  'https://telegra.ph/file/2e96639cf2f23858ac2e1.mp4'
global.ppKosong = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'
global.ppUrl = 'https://i.ibb.co/3Fh9V6p/avatar-contact.png'

// Sticker WM and react
global.packname = ''
global.author = 'Takashi'
global.wait = '`Mengeksekusi Command, Tunggu Sebentar`'
global.nsfw = '🥵'
global.done = '☑️'
global.error = '❌'
global.newsid = '120363414329890254@newsletter'//isi
global.multiplier = 100
global.maxwarn = '2' // maximal warn

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
