import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn }) => {
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing',
        'Pon',
        'Wage',
        'Kliwon',
        'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, {
        weekday: 'long'
    })
    let date = d.toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? conn.user.jid: m.sender
    if (typeof db.data.users[who] == 'undefined') return m.reply('Pengguna tidak ada didalam data base')
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/2WzLyGk/profile.jpg')
    let bio = await conn.fetchStatus(who).catch(_ => 'Tidak Ada Bio')
    let { role, premium, money, level, limit, exp, lastclaim, registered, pasangan, regTime, age } = global.db.data.users[who]
    let username = conn.getName(who)
    let user = db.data.users[who]
    let name = `${user.registered ? user.name : conn.getName(who)}`
    if (!(who in global.db.data.users)) return m.reply(`User ${who} not in database`)
    let str = `
___-------___*User Profil*___-------___
👤 • *Username:* ${user.registered ? user.name : ''}
*❤️ Pasangan:*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya And Jomblo`}
🏷 • *Status:* ${who.split`@`[0] == global.nomorown ? 'Developer' : user.premiumTime >= 1 ? 'Premium User' : user.level >= 1000 ? 'Elite User' : 'Free User'}
📮 • *Bio:* ${bio.status ? bio.status : bio}
📧 • *Tag:* @${who.replace(/@.+/, '')}
📞 • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 • *Link:* https://wa.me/${who.split`@`[0]}
🎨 • *Age:* ${user.registered ? age: ''}

______*RPG Profil*______
🔧 • *Role:* ${role}
${rpg.emoticon('level')} • *Level:* ${level}
${rpg.emoticon('exp')} • *Exp:* ${exp}
${rpg.emoticon('money')} • *Money:* ${money}

🌟 • *Premium:* ${user.premiumTime > 0 ? "✅": "❌"} ${user.premiumTime > 0 ? `
⏰ • *PremiumTime:*
${clockString(user.premiumTime - new Date() * 1)}`: ''}
📑 • *Registered:* ${user.registered ? '✅ ( ' + new Date(regTime) + ' )' : '❌'}

⻝ 𝗗𝗮𝘁𝗲: ${week} ${date}
⻝ 𝗧𝗶𝗺𝗲: ${wktuwib}
`.trim()
    m.reply(str)
}
handler.help = ['profile [@user]']
handler.tags = ['info', 'xp']
handler.command = /^(pp|profil)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
    let ye = isNaN(ms) ? '--': Math.floor(ms / 31104000000) % 10
    let mo = isNaN(ms) ? '--': Math.floor(ms / 2592000000) % 12
    let d = isNaN(ms) ? '--': Math.floor(ms / 86400000) % 30
    let h = isNaN(ms) ? '--': Math.floor(ms / 3600000) % 24
    let m = isNaN(ms) ? '--': Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--': Math.floor(ms / 1000) % 60
    return ['┊ ', ye, ' *Years 🗓️*\n', '┊ ', mo, ' *Month 🌙*\n', '┊ ', d, ' *Days ☀️*\n', '┊ ', h, ' *Hours 🕐*\n', '┊ ', m, ' *Minute ⏰*\n', '┊ ', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}