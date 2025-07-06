import WebSocket from 'ws';

async function getStockUpdate() {
  return await new Promise((resolve, reject) => {
    const socket = new WebSocket('wss://ws.growagardenpro.com/');

    socket.once('message', (data) => {
      try {
        const json = JSON.parse(data.toString());
        resolve(json.data);
      } catch (err) {
        reject(new Error('Gagal parse data WebSocket'));
      } finally {
        socket.close();
      }
    });

    socket.once('error', reject);
  });
}

function formatCategory(title, items) {
  if (!items || !items.length) return '';
  return `\n*${title}*\n` + items.map(i => `- ${i.name} (${i.quantity})`).join('\n');
}

function formatWeather(weather) {
  if (!weather) return '';
  return `\n🌧️ *Weather*\n- Type: ${weather.type}\n- Active: ${weather.active ? 'Yes' : 'No'}\n- Effects:\n${weather.effects.map(e => `  • ${e}`).join('\n')}`;
}

let handler = async (m, { conn }) => {
  try {
    const data = await getStockUpdate();

    const seeds = formatCategory('🌾 Bibit Tanaman', data.seeds);
    const gear = formatCategory('🧰 Peralatan Kebun', data.gear);
    const eggs = formatCategory('🥚 Telur Pertenakan', data.eggs);
    const cosmetics = formatCategory('📦 Dekorasi Item', data.cosmetics);
    const honey = formatCategory('📖 Event Item', data.honey);
    const weather = formatWeather(data.weather);

    const message = `*🌱 Grow a Garden Update Stock*\n\n${seeds}\n${gear}\n${eggs}\n${cosmetics}\n${honey}\n${weather}`;

    await conn.sendMessage(m.chat, {
      text: message.trim(),
      contextInfo: {
        externalAdReply: {
          title: 'Grow A Garden Stock Viewer 🌼',
          body: 'Update terbaru real-time!',
          thumbnailUrl: 'https://files.catbox.moe/n252jr.jpg',
          mediaType: 1,
          renderLargerThumbnail: true,
          showAdAttribution: false
        }
      }
    }, { quoted: m });
  } catch (err) {
    await conn.reply(m.chat, '❌ Gagal mengambil data stok dari Grow Garden.', m);
  }
};

handler.help = ['growgarden'];
handler.tags = ['internet'];
handler.command = /^growgarden|gag|growagarden$/i;

export default handler;