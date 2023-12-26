let handler = async (m, { args, usedPrefix, text, command, conn }) => {
if (command === 'absen' || command === 'hadir') {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.reply(m.chat, `Tidak ada absen berlangsung!`, m)
        throw false
    }
    let absen = conn.absen[id][1]
    if (absen.includes(m.sender)) throw 'Kamu sudah absen!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} TANGGAL ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} DAFTAR ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${dmenuf}`
await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
else if (command === 'cekabsen') {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.reply(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, m)
            
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `${dmenub} ${i + 1}.  @${v.split`@`[0]}`).join('\n')
            let caption = `*${htjava} TANGGAL ${htjava}*\n${date}
${conn.absen[id][2]}

*${htjava} SUDAH ABSEN ${htjava}*
*Total:* ${absen.length}

${dmenut}
${list}
${dmenuf}`
await conn.reply(m.chat, caption, m, { mentions: conn.parseMention(caption) })
}
else if (command === 'hapusabsen' || command === 'deleteabsen') {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) await conn.reply(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, m)
    delete conn.absen[id]
    m.reply(`Berhasil!`)
}
else if (command === 'mulaiabsen' || command === 'startabsen') {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.reply(m.chat, `_*Masih ada absen di chat ini!*_\n\n*${usedPrefix}hapusabsen* - untuk menghapus absen`, m)
    }    
    conn.absen[id] = [
        await conn.reply(m.chat, `Berhasil memulai absen!\n\n*${usedPrefix}absen* - untuk absen\n*${usedPrefix}cekabsen* - untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`, m),
        [],
        text
    ]
}}

handler.help = handler.command = ['hadir', 'absen', 'cekabsen', 'hapusabsen', 'deleteabsen', 'mulaiabsen', 'startabsen']
handler.tags = ['absen']

export default handler
