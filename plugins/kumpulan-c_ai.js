import fetch from 'node-fetch'
import util from 'util'
  let handler = async (m, { args, usedPrefix, text, command, conn }) => {
    if (command === 'cai') {
  if (!text) throw(`Input Text Dan Karakter!\nExample: .cai hai kamu siapa|Kirito`)    
  try {
    let [ q, k ] = text.split('|')
    m.reply(`Tunggu sebentar...`)
    let js = await fetch(API('lann', '/api/search/c-ai', { prompt: q, char: k, apikey: lann}))
    let json = await js.json()
    m.reply(json.message)
  } catch (error) {
    console.error(error)
    m.reply('Terjadi kesalahan saat menjalankan perintah.')
  }
}
    else if (command === 'c-ainino') {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Luffy&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
               } catch (err ) {
        m.reply(util.format(hsl))
        }
        }      
           else if (command === 'c-aimiku') {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Miku&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
        } catch (err ) {
        m.reply(util.format(hsl))
        }}
        else if (command === 'c-aipaimon') {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Paimon&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }       
    else if (command === 'c-aiklee') {
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Klee&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
        } catch (err ) {
        m.reply(util.format(hsl))
        }}
else if (command === 'c-aierza') {    
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Erza&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
    else if (command === 'c-ailuffy') {       
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Luffy&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
        } catch (err ) {
        m.reply(util.format(hsl))
        }
        }
else if (command === 'c-airobin') {    
        if (!text) return m.reply('apa yang ingin kamu tanyakan kepada saya?')
        let afi = await fetch(`https://api-kazedevid.vercel.app/ai/charaai?chara=Robin&text=${text}`)
        let hsl = await afi.json()
        try {
        await m.reply(hsl)
        } catch (err ) {
        m.reply(util.format(hsl))
        }}        }
       
handler.tags = ['miku']
handler.command = handler.help = /^(cai|c-ainino|c-aimiku|c-aipaimon|c-aiklee|c-aierza|c-ailuffy|c-airobin)$/i
handler.limit = true
export default handler
