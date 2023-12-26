import { sticker } from '../lib/sticker.js'
let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'spank') {
let p = await fetch(`https://nekos.life/api/v2/img/spank`)
  let a = await p.json()
  if (a.url) {
let stiker = await sticker(null, a.url, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
   } 
} 
else if (command === 'trap') {
  await m.reply(`*trap dikirim di chat pribadi*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
let g = await fetch(`https://waifu.pics/api/nsfw/trap`)
let f = await g.json()
if (f.url) {
 conn.sendFile(m.sender, f.url, '', '', m)
 }
}}
handler.help = ['trap', 'spank']
handler.tags = ['anime']
handler.command = /^(trap|spank)$/i

handler.owner = true
export default handler

