import WSF from 'wa-sticker-formatter'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
  if (!text) throw `*• Example :* ${usedPrefix + command} *text*`
  let url = `https://aqul-brat.hf.space/api/brat?text=${text}`
  let res = await fetch(url)
  let buffer = await res.buffer()
  let stkr = await sticker(null, buffer, global.packname, global.author)
  conn.sendFile(m.chat, stkr, 'sticker.webp', `${text}`, m)
}

handler.help = ['brat *[text]*']
handler.tags = ['sticker']
handler.command = /^(brat)$/i
handler.limit = true

export default handler

const sticker = async (img, url, stickpack, stickauth, categories = [""]) => {
  const stickerMetadata = {
    type: "full",
    pack: stickpack,
    stickauthor: stickauth,
    categories,
  }
  return await new WSF.Sticker(img || url, stickerMetadata).build()
}
