import fetch from "node-fetch";
import crypto from "crypto";
import { sizeFormatter } from "human-readable";
const format = sizeFormatter()
let handler = async (m, { conn, args, text, usedPrefix: _p, command }) => {    
    //Manage panel
    const domain = "${global.domain}" // Domain
const apikey = "${global.domain}" // Apikey
const c_apikey = "${global.capikey}" // c Apikey
    const webPage = "https://fallxzx.floiyrine.biz.id" // Web Page            
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
    switch (command) {
    case "11gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "11000"
let cpu = "250"
let disk = "12000"
let email = username + "@IMiku.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
 let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({              "email": username + profil.toString() + "@gmail.com", 
"username": username, 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "12gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "12000"
let cpu = "280"
let disk = "13000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username, 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB
*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "13gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "13000"
let cpu = "300"
let disk = "14000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username, 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "15gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "15000"
let cpu = "320"
let disk = "16000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "17gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "17000"
let cpu = "350"
let disk = "18000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "18gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "18000"
let cpu = "380"
let disk = "19000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "19gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "19000"
let cpu = "400"
let disk = "20000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "20gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "20000"
let cpu = "420"
let disk = "21000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "21gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "21000"
let cpu = "450"
let disk = "22000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "22gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "22000"
let cpu = "480"
let disk = "23000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

*SERING² ORDER YAA KAKK*

[USER ID: ${user.id}]
👤USERNAME: ${user.username}
🔐PASSWORD: ${password}
🌐LOGIN: ${domain}

TUTORIAL PAKAI PANEL SILAHKAN CEK
https://bit.ly/3ZRFHHB

*NOTE :*
- MOHON DI SIMPAN ,KARENA BOT HardzXD BIKIN AKUN ADMIN PANEL HANYA 1× JADI JIKA HILANG JANGAN SALAHKAN BOT HardzXD

- GARANSI 1 MINGGU DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "23gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "23000"
let cpu = "420"
let disk = "24000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username + profil.toString(), 
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
GARANSI 14 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
=====================================
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
break
case "24gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "24000"
let cpu = "500"
let disk = "25000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
GARANSI 14 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
=====================================
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}

break
case "25gb": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location
let memo = "25000"
let cpu = "550"
let disk = "26000"
let email = username + "@hardzxd.net"
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let profil = d.exists ? crypto.randomBytes(2).toString("hex") : t[2]
let password = username + profil.toString()
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + profil.toString() + "@gmail.com", 
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}`)
let ctf = `Hai @${u.split`@`[0]}
<-----INI ADALAH DATA AKUN MU----->

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}

NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
GARANSI 14 HARI DARI HARI PEMBELIAN PERTAMA

*JIKA DONE JANGAN LUPA SS DONE ATAU KETIK #DONE*
=====================================
`
conn.sendMessage(u, {text: ctf}, {quoted:m})
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "ISI PAKE TANGGAL PEMBUATAN",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`__________*SUCCESS*___________
ID: ${user.id}
USERNAME: ${user.username}
EMAIL: ${user.email}
NAME: ${user.first_name} ${user.last_name}`)
}
}}
handler.help = handler.command = ["11gb", "12gb", "13gb", "15gb", "17gb", "18gb", "19gb", "20gb", "21gb", "22gb", "23gb", "24gb", "25gb"];
handler.tags = ["panel", "host"]
handler.premium = true
export default handler