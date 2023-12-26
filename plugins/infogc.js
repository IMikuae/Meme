let handler = async (m, {
    conn,
    groupMetadata,
    usedPrefix,
    text,
    participants, 
    command
}) => {
    let get = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    await conn.sendMessage(m.chat, {
    text: `GRUP: *${groupMetadata.subject}*\nID :* ${groupMetadata.id}\nMEMBER: *${participants.length}\n\n${groupMetadata.desc}*`
}, {quoted: m, ephemeralExpiration: 86400})
}
handler.command = handler.help = ["infogc"]
handler.tags = ["tools"]
handler.owner = true
handler.group = true
export default handler