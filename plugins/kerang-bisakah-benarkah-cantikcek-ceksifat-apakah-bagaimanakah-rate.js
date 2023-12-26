let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'benarkah') {
  conn.reply(m.chat, `
*Pertanyaan:* ${m.text}
*Jawaban:* ${pickRandom(['Iya','Sudah pasti','Sudah pasti bisa','Tidak','Tentu tidak','Sudah pasti tidak'])}
`.trim(), m, {quoted:{key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: wm,jpegThumbnail: Buffer.alloc(0)}}}})
}
else if (command === 'bisakah') {
  conn.reply(m.chat, `
*🌎Pertanyaan:* ${command} ${text}
*💬Jawaban:* ${pickRandom(['Iya','Bisa','Tentu saja bisa','Tentu bisa','Sudah pasti','Sudah pasti bisa','Tidak','Tidak bisa','Tentu tidak','tentu tidak bisa','Sudah pasti tidak'])}
`.trim(), m)
}
else if (command === 'dimanakah') {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['di neraka','di surga','di mars','di tengah laut','di dada :v','di hatimu >///<'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
else if (command === 'cantikcek') {
  conn.reply(m.chat,`${pickRandom(['Cantik Level : 4%','Cantik Level : 7%','Cantik Level : 12%','Cantik Level : 22%','Cantik Level : 27%','Cantik Level : 35%','Cantik Level : 41%','Cantik Level : 48%','Cantik Level : 56%','Cantik Level : 64%','Cantik Level : 71%\n\nLumayan cantik juga lu ya','Cantik Level : 77%\n\nGak akan Salah Lagi dah neng','Cantik Level : 83%\n\nDijamin cowok gak akan kecewa neng','Cantik Level : 89%\n\ncowok2 pasti auto salfok klo ngeliat lo!','Cantik Level : 94%\n\nAARRGGHHH!!!','Cantik Level : 100%\n\nLU EMANG CEWEK TERCANTIK YANG PERNAH GW LIAT!!!'])}`, m)
}
else if (command === 'ceksifat') {
   if (!text) return conn.reply(m.chat, 'Masukan Namamu!', m)
	
  conn.reply(m.chat, `
╭━━━━°「 *Sifat ${text}* 」°
┃
┊• Nama : ${text}
┃• Ahlak Baik : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┊• Ahlak Buruk : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Orang yang : ${pickRandom(['Baik Hati','Sombong','Pelit','Dermawan','Rendah Hati','Rendah Diri','Pemalu','Penakut','Pengusil','Cengeng'])}
┊• Selalu : ${pickRandom(['Rajin','Malas','Membantu','Ngegosip','Jail','Gak jelas','Shoping','Chattan sama Doi','Chattan di WA karna Jomblo','Sedih','Kesepian','Bahagia','ngocok tiap hari'])}
┃• Kecerdasan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┊• Kenakalan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┃• Keberanian : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┊• Ketakutan : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
╰═┅═━––––––๑
`.trim(), m, m.mentionedJid ? {
        mentions: m.mentionedJid
    } : {})
}
else if (command === 'apakah') {
conn.reply(m.chat,`${pickRandom(['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Bisa Jadi', 'Betul', 'Tidak', 'Tidak mungkin'])}`, m)
}
else if (command === 'bagaimanakah') {
   if (!text) return conn.reply(m.chat, 'Penggunaan ${command} text\n\nContoh : ${command} saya wibu!', m)
   conn.reply(m.chat,`${pickRandom(['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel', 'astaghfirallah Beneran???', 'Pusing ah', 'Owhh Begitu:(', 'Yang Sabar Ya Bos:(', 'Gimana yeee'])}`, m)
}
else if (command === 'rate') {
   if (!text) return conn.reply(m.chat, 'Penggunaan ${command} text\n\nContoh : ${command} Gambar aku', m)
      conn.reply(m.chat,`${pickRandom(['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100'])}`, m)
      }}
handler.help = ['benarkah', 'bisakah', 'diamanakah', 'cantikcek', 'ceksifat <nama>', 'apakah', 'bagaimanakah', 'rate'].map(v => v + ' <text>')
handler.tags = ['kerang']
handler.command = /^benarkah|bisakah|diamanakah|cantikcek|ceksifat|apakah|bagaimanakah|rate$/i
export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}