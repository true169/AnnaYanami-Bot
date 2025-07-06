import { xpRange } from '../lib/levelling.js';

let handler = async (m, { conn, args, usedPrefix }) => {
  let user = global.db.data.users[m.sender];
  let text = args[0]?.toLowerCase();

  const Styles = (text, style = 1) => {
    const xStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    const yStr = Object.freeze({
      1: "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
      2: "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ１２３４５６７８９０",
    });
    const replacer = [];
    xStr.map((v, i) =>
      replacer.push({
        original: v,
        convert: yStr[style].split("")[i],
      })
    );
    const str = text.toLowerCase().split("");
    const output = [];
    str.map((v) => {
      const find = replacer.find((x) => x.original == v);
      find ? output.push(find.convert) : output.push(v);
    });
    return output.join("");
  };

  // Ambil semua kategori (tags)
  const tags = {};
  for (let name in global.plugins) {
    let plugin = global.plugins[name];
    if (!plugin || plugin.disabled) continue;
    for (let tag of plugin.tags || []) {
      if (!tags[tag]) tags[tag] = [];
      tags[tag].push(plugin);
    }
  }

  // ========= .menu → UTAMA =========
  if (!text) {
    let daftarTag = Object.keys(tags).map(tag => `  • ${usedPrefix}menu ${tag}`).join('\n');

    let menu = `Hai @${m.sender.replace(/@.+/, '')}
Perkenalkan Saya Adalah Program Javascript Bernama *${global.namebot}* yang di Buat Oleh Dev *${global.nameown}*

  *- I N F O - U S E R*
  
  • Nama: ${m.name}
  • Limit: ${user.limit}
  • Level: ${user.level}
  • Exp: ${user.exp}
  • Terdaftar: ${user.registered ? '✔' : '✘'}

*- L I S T - M E N U*

  • ${usedPrefix}menu all
${daftarTag}

~> *Use Bots Wisely, Only Use Appropriately*`.trim();

    return conn.sendMessage(m.chat, {
      text: Styles(menu),
      mentions: [m.sender]
    }, { quoted: m });
  }

  // ========= .menu [kategori] =========
  if (tags[text]) {
    const spacedText = (t) => t.toUpperCase().split("").join(" ");
    let cmds = tags[text].map(p => p.help.map(cmd => `  • ${usedPrefix + cmd}`)).flat().join('\n');
    let menu2 = `  *「 M E N U - ${spacedText(text)} 」*\n\n${cmds}`;
    return conn.sendMessage(m.chat, {
      text: Styles(menu2),
      mentions: [m.sender],
    }, { quoted: m });
  }

  // ========= .menu all =========
  if (text === 'all') {
    const spaced = s => s.toUpperCase().split('').join(' ');

    // Kumpulkan isi per kategori
    let allTagsAndHelp = Object.keys(tags).map(tag => {
      let cmds = tags[tag]
        .map(p => p.help.map(cmd => `   • ${usedPrefix + cmd}`))
        .flat()
        .join('\n');
      return `  *「 M E N U - ${spaced(tag)} 」*\n\n${cmds}`;
    }).join('\n\n');

    // Gabungkan ke teks all
    let all = `${allTagsAndHelp}`.trim();

    return conn.sendMessage(m.chat, {
      text: Styles(all),
      mentions: [m.sender]
    }, { quoted: m });
  }

  // ========= Jika kategori tidak ditemukan =========
  return conn.sendMessage(m.chat, {
    text: `Kategori *${text}* tidak ditemukan!\n\nKetik *.menu* untuk melihat daftar kategori yang tersedia.`,
  }, { quoted: m });
};

handler.help = ['menu'];
handler.tags = ['main'];
handler.command = /^menu$/i;
handler.register = true;

export default handler;
