import axios from 'axios'
import { Sticker } from 'wa-sticker-formatter'

let handler = async (m, { text, conn }) => {
  if (!text) return m.reply('Teksnya mana Member dongo')

  try {
    m.react('🕑')

    let { data } = await axios.get(
      `https://fastrestapis.fasturl.cloud/maker/brat/animated?text=${encodeURIComponent(text)}&mode=animated`,
      {
        responseType: 'arraybuffer'
      }
    )

    const sticker = new Sticker(data, {
      pack: global.packname,
      author: '',
      type: 'full',
      quality: 70
    })

    await conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m })
  } catch {
    throw 'error mending mancing jir'
  }
}

handler.help = ['bratvid *[teks]*']
handler.command = ['bratvid']
handler.tags = ['sticker']

export default handler
