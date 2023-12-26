import { sticker } from '../lib/sticker.js'
let handler = async (m, { args, usedPrefix, text, command, conn }) => {
    if (command === 'ttp') {
if (!text) throw 'Texnya Mana Kak?'
let stiker = await sticker(null, `https://zeltoria.site/api/maker/ttp?q=${text}`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()    
} 
  else  if (command === 'ttp2') {
if (!text) throw 'Texnya Mana Kak?'
let stiker = await sticker(null, `https://zeltoria.site/api/maker/ttp2?q=${text}`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()   
 }
handler.tags = ['sticker']
handler.help = handler.command = ['ttp', 'ttp2']
handler.limit = true
export default handler