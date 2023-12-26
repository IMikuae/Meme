import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { args, usedPrefix, text, _p, groupMetadata, participants,  command, conn }) => {
      if (command === 'done') {
      let tag = `@${m.sender.replace(/@.+/, '')}`
  let _pp = './src/avatar_contact.png'
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    
    let md = `
${global.wm}

📱 NOMER PEMBELI : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

Pesanan ${name} Sukses
`.trim()
    m.reply(md)
}
   else if (command === 'proses') {
m.reply('*SIAP PESANAN ANDA AKAN KAMI PROSES JADI DI MOHON UNTUK MENUNGGU SEBENTAR YAH BANG*')
conn.sendMessage("6281806369588" + "@s.whatsapp.net", { text: "OY ADA YANG MESEN NIH CEPETAN PROSES NANTI BUYER NGAMOK", contextInfo:{ forwardingScore: 9999, isForwarded: true }})}
   else if (command === 'selesai') {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*

Penggunaan:
.selesai barang,nominal`);
let barang = t[0];
let nominal = t[1];
m.reply(`*━━ TRANSAKSI BERHASIL ━━*

 _• *Barang:* ${barang}_
 _• *Nominal:* Rp${nominal}_
 _• *Nama store:* ${namebot}_
*TERIMA KASIH TELAH ORDER \n*JANGAN LUPA ORDER LAGI YA*🙏`)
}}
handler.help = ['done [@user]', 'proses', 'selesai']
handler.tags = ['store']
handler.command = /^(done|proses|selesai)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['┃ ', ye, ' *Years 🗓️*\n', '┃ ', mo, ' *Month 🌙*\n', '┃ ', d, ' *Days ☀️*\n', '┃ ', h, ' *Hours 🕐*\n', '┃ ', m, ' *Minute ⏰*\n', '┃ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}