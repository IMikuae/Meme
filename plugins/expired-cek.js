let handler = async (m, { args, usedPrefix, text, command, conn }) => {
      if (command === 'cekexpired') {
	if (db.data.chats[m.chat].expired < 1) throw `Group Ini Tidak DiSet Expired !`
    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    
    conn.reply(m.chat, `*${decor.htki} ᴇxᴘɪʀᴇᴅ ${decor.htka}*
${msToDate(global.db.data.chats[who].expired - now)}`, m)
}
else if (command === 'delexpired') {
    let who
    if (m.isGroup) who = args[0] ? args[0] : m.chat
    else who = args[0]

    if (new Date() * 1 < global.db.data.chats[who].expired) global.db.data.chats[who].expired = false
    else global.db.data.chats[who].expired = false
    conn.reply(m.chat, `Berhasil menghapus hari kadaluarsa untuk Grup ini`, m)
}
else if (command === 'setexpired') {
if (!args[0] || isNaN(args[0])) throw `Masukkan angka mewakili jumlah hari !\n*Misal : ${usedPrefix + command} 30*`

    let who
    if (m.isGroup) who = args[1] ? args[1] : m.chat
    else who = args[1]

    var jumlahHari = 86400000 * args[0]
    var now = new Date() * 1
    if (now < global.db.data.chats[who].expired) global.db.data.chats[who].expired += jumlahHari
    else global.db.data.chats[who].expired += now + jumlahHari
    conn.reply(m.chat, `Berhasil menetapkan hari kadaluarsa untuk Grup ini selama ${args[0]} hari.\n\nHitung Mundur : ${msToDate(global.db.data.chats[who].expired - now)}`, m)
}}
handler.help = ['cekexpired', 'delexpired', 'setexpired']
handler.tags = ['group']
handler.command = /^(cekexpired|delexpired|setexpired)$/i
handler.group = true

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Days ☀️\n" + hours + " Hours 🕐\n" + minutes + " Minute ⏰";
    // +minutes+":"+sec;
}
