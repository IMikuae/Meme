import fetch from 'node-fetch'
let timeout = 120000
let poin = 500

let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'tebakanime') {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih Ada Soal Yang Belum Terjawab', conn.tebakanime[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/unx21/ngetezz/main/src/data/nyenyenye.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
Waktu *${(timeout / 1000).toFixed(2)} Detik*
Ketik ${usedPrefix}hani Untuk Bantuan
Bonus: ${poin} XP
`.trim()
    conn.tebakanime[id] = [
        await conn.sendFile(m.chat, json.img, 'anu.jpg', caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tebakanime[id]) await conn.reply(m.chat, `Waktu Habis!\nJawabannya Adalah *${json.jawaban}*`, conn.tebakanime[id][0])
            delete conn.tebakanime[id]
        }, timeout)
    ]
}
else if (command === 'hani') {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    let ans = json.jawaban
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas Soalnya, Bukan Pesan Ini', conn.tebakanime[id][0])
}}
handler.tags = ['game']
handler.help = handler.command = /^tebakanime|hani$/i
export default handler

