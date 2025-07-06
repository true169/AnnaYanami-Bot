import axios from "axios";

let handler = async(m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `Masukkan Pertanyaan\nContoh: ${usedPrefix+command} Halo`;
	await m.reply(wait);
	try {
		let { data } = await axios.get(`https://vapis.my.id/api/claude?q=${encodeURIComponent(text)}`);
		if (data.status) {
			return await conn.sendMessage(m.chat, {
				text: data.result,
				contextInfo: {
					mentionedJid: [m.sender],
					isForwarded: true,
					forwardingScore: 1,
					forwardedNewsletterMessageInfo: {
						newsletterJid: newsid,
						newsletterName: newsname
					},
					externalAdReply: {
						title: "Claude AI",
						body: author,
						thumbnailUrl: "https://files.catbox.moe/c31o9c.jpg"
					}
				}
			});
		} else {
			throw "Terjadi Kesalahan Saat Memproses Permintaan"
		}
	} catch (_) {
		throw _
	}
}

handler.help = ["claude *[query]*"];
handler.command = /^(claude(ai)?)$/i;
handler.tags = ["ai"];
handler.premium = true

export default handler