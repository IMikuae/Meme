import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, text, command, conn }) => {
await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
      if (command === 'patrick') {
let res = 'https://api.zeeoneofc.my.id/api/telegram-sticker/patrick?apikey=RCo6vEcS'
let stiker = await sticker(null, res, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
else if (command === 'smug') {
	  let p = await fetch(`https://api.waifu.pics/sfw/smug`)
  let a = await p.json()
  if (a.url) {
let stiker = await sticker(null, a.url, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
   }	}	
   else if (command === 'hug') {
  let ress = await fetch(global.API('https://api.waifu.pics', '/sfw/hug'))
  let json = await ress.json()
  let stker = await sticker(null, json.url, global.packname, global.author)
  if (stker) return conn.sendFile(m.chat, stker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
  }
  else if (command === 'kis') {
		  let rs = await fetch(global.API('https://api.waifu.pics', '/sfw/kiss'))
  let jon = await rs.json()
  let sker = await sticker(null, jon.url, global.packname, global.author)
  if (sker) return conn.sendFile(m.chat, sker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
  }
else if (command === 'sponsbob') {		
		  let res = 'https://api.zeeoneofc.my.id/api/telegram-sticker/patrick?apikey=RCo6vEcS'
let stiker = await sticker(null, res, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}}
  handler.help = handler.command = ['patrick', 'smug', 'hug', 'kis', 'sponsbob'];
  handler.tags = ['sticker'];
  handler.limit = true
  
  export default handler;