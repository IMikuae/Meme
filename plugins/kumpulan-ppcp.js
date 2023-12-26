import { promises, readFileSync } from 'fs'
import fetch from "node-fetch"
let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'ppcp') {
 let data = JSON.parse(readFileSync('./lib/database/ppcouple/ppcouple.json'))
 let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '*cowok*', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '*cewek*', m)
}
   else if (command === 'ppcp2') {
let anu = await fetch('https://api.akuari.my.id/randomimage/ppcouple')
let url = await anu.json()
let { hasil } = url 
let weem = '𝐑𝐚𝐧𝐝𝗼𝗺 𝐏𝐫𝗼𝐟𝐢𝐥𝐞 𝐂𝗼𝐮𝐩𝐥𝐞'
m.reply(wait)
await conn.sendFile(m.chat, hasil.cowok, 'ppcouple.png',  '𝙱𝚘𝚢𝚜', m)
await conn.sendFile(m.chat, hasil.cewek, 'ppcouple.png',  '𝙶𝚒𝚛𝚕𝚜', m)
}
   else if (command === 'ppcp3') {
  let data = await (await fetch('https://raw.githubusercontent.com/KazukoGans/database/main/anime/ppcouple.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', '♂️', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', '♀️', m)
}
}
handler.help = ['ppcp', 'ppcp2']
handler.tags = ['ppcp']
handler.command = /^ppcp|ppcp2|ppcp3$/i
handler.limit = true

export default handler