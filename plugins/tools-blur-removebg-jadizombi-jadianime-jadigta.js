import jimp from 'jimp'
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { args, usedPrefix, command, conn, text }) => {
 if (command === 'blur') {
if (!text) throw`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`
	let image = m.message?.imageMessage
		? await m.download()
			: /image/.test(m.quoted?.mediaType)
		? await m.quoted.download()
			: m.mentionedJid?.[0]
		? await conn.profilePictureUrl(m.mentionedJid[0], 'image')
			: await conn.profilePictureUrl(m.quoted?.sender || m.sender, 'image')
	if (!image) throw `Couldn't fetch the required Image`
	let level = text || '5', img = await jimp.read(image)
	img.blur(isNaN(level) ? 5 : parseInt(level))
	img.getBuffer('image/jpeg', (err, buffer) => {
		if (err) throw err?.message || `Couldn't blur the image`
		m.reply(buffer)
	})
}
else if (command === 'removebg' || command === 'nobg') {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
     m.reply(wait)
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(API('lann', '/api/tools/removebg', { url: `${out}`, apikey: lann }));
       const image = await api.json();
       const url = image.url.result
       conn.sendFile(m.chat, url, null, `🍟 Removebg Success`, m);
    } else {
      m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`Identifikasi gagal. Silakan coba lagi.`);
  }
}
else if (command === 'jadizombie' || command === 'tozombie') {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
	       await conn.reply(m.chat, wait, m)
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(API('lann', '/api/maker/jadizombie', { url: `${out}`, apikey: lann }))
			let convert = await res.json()
			let buff = await fetch(convert.result)
           .then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
}
else if (command === 'jadigta' || command === 'togta') {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
    await conn.reply(m.chat, wait, m)
		try {
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(API('lann', '/api/maker/jadigta', { url: out, apikey: lann }))
			let convert = await res.json()
			let buff = await fetch(convert.result)
            .then(result => result.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}}
else if (command === 'toanime' || command === 'jadianime') {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
	       await conn.reply(m.chat, wait, m)
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(API('lann', '/api/maker/jadianime', { url: `${out}`, apikey: lann }))
			let convert = await res.json()
			let buff = await fetch(convert.result.img_crop_single)
           .then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}}}
handler.help = handler.command = ['blur', 'removebg', 'nobg', 'jadizombie', 'tozombie', 'jadigta', 'togta', 'jadianims', 'toanime']
handler.tags = ['mikutols']
handler.limit = true
export default handler

