import { tebakgambar } from '@bochilteam/scraper'

let timeout = 120000
let poin = 4999
let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'tebakanime') {
    conn.tebakingambar = conn.tebakingambar ? conn.tebakingambar : {}
    let id = m.chat
    if (id in conn.tebakingambar) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakingambar[id][0])
        throw false
    }
    let json = await tebakgambar()
    let caption = `*${command.toUpperCase()}*
Rangkailah Gambar Ini
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}hgam untuk bantuan
Bonus: ${poin} XP
    `.trim()
    conn.tebakingambar[id] = [
        await conn.sendMessage(m.chat, { image: { url: json.img }, caption: caption }, { quoted: m }),
        json, poin,
        setTimeout(() => {
            if (conn.tebakingambar[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakingambar[id][0])
            delete conn.tebakingambar[id]
        }, timeout)
    ]
}
     else if (command === 'hgam') {
    conn.tebakingambar = conn.tebakingambar ? conn.tebakingambar : {}
    let id = m.chat
    if (!(id in conn.tebakingambar)) throw false
    let json = conn.tebakingambar[id][1]
    conn.reply(m.chat, '```' + json.jawaban.replace(/[AIUEOaiueo]/ig, '_') + '```', m)
}}
handler.help = handler.command = ['tebakgambar', 'hgam']
handler.tags = ['game']
export default handler