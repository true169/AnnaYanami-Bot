import { createHash } from 'crypto'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  const nameSender = conn.getName(m.sender)
  const user = global.db.data.users[m.sender]
  const pp = await conn.profilePictureUrl(m.sender, "image").catch(_ => "https://telegra.ph/file/ee60957d56941b8fdd221.jpg")

  if (user.registered === true) throw `Kamu sudah terdaftar.\nIngin daftar ulang? Ketik *${usedPrefix}unreg*`

  if (!Reg.test(text)) {
    return m.reply(`Masukkan format yang benar:\nContoh: .daftar ${nameSender}.17`)
  }

  let [_, name, splitter, age] = text.match(Reg)

  if (!name) throw 'Nama tidak boleh kosong'
  if (!age) throw 'Umur tidak boleh kosong'

  age = parseInt(age)
  if (age > 30) throw 'Tua banget jink 😅'
  if (age < 5) throw 'Terlalu bocil 😐'

  user.name = name.trim()
  user.age = age
  user.regTime = +new Date()
  user.registered = true

  const sn = createHash('md5').update(m.sender).digest('hex')

  const cap = `*─ Registrasi Selesai*

* *Name:* ${name}
* *Age :* ${age}
* *Date :* ${moment.tz(user.regTime, "Asia/Jakarta").format("YYYY-MM-DD HH:mm:ss")}
* *SN:* ${sn}

Thanks for registering & using ${global.namebot} ❗
Gunakan bot sewajarnya, jangan spam atau kamu akan di-banned!`

  await conn.sendMessage(m.chat, {
    text: cap,
    contextInfo: {
      externalAdReply: {
        title: "❗ N E W - U S E R ",
        body: "",
        showAdAttribution: true,
        mediaType: 1,
        sourceUrl: '',
        thumbnailUrl: pp,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['daftar', 'register']
handler.tags = ['main']
handler.command = /^(daftar|reg(ister)?)$/i

export default handler