import fetch from 'node-fetch'
import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'meme') {
    let res = await googleImage('meme indonesia')
    let image = res.getRandom()
    await conn.sendFile(m.chat, image, null, 'Asupan Recehnya Kak', m, null)
}
   else if (command === 'memeindo') {
let res = await fetch('https://raw.githubusercontent.com/HasamiAini/wabot_takagisan/main/whatsapp%20bot%20takagisan/whatsapp%20bot%20takagisan/lib/memeindo.json')
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendFile(m.chat, await (await fetch(url.image)).buffer(), 'memeindo.jpg', 'Nih Memeindo', m)
}
}
handler.command = /^(meme|memeindo)$/i
handler.tags = ['internet']
handler.help = ['meme', 'memeindo']
handler.limit = true
export default handler
