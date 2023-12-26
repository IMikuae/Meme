import fs from 'fs'
import fetch from 'node-fetch'
import crypto from "crypto";
import { sizeFormatter } from "human-readable";
const format = sizeFormatter()
let handler = async (m, { conn, text, usedPrefix: _p, command }) => {
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
global.jumlah = text.split("|")[1]
switch (command) {
       case "ramlist":       
let lrm = `SEWA PANEL 
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
*◥✥◤ LIST HARGA PANEL*
*➪ RAM 1GB | CPU 30% = 1K*
*➪ RAM 2GB | CPU 60% = 2K*
*➪ RAM 3GB | CPU 80% = 3K*
*➪ RAM 4GB | CPU 110% = 4K*
*➪ RAM 5GB | CPU 140% = 5K*
*➪ RAM 6GB | CPU 170% = 6K*
*➪ RAM 8GB | CPU 30% = 8k*
*➪ RAM UNLI | CPU UNLI : 10K*
11GB✅|12GB✅|13GB✅|14GB✅
15GB✅|16GB✅|17GB✅|18GB✅
19GB✅|20GB✅|21GB✅|22GB✅
23GB✅|24GB✅|25GB✅

*◥✥◤ GARANSI 14 day*
*︵‿︵‿︵‿︵︵‿︵‿︵‿︵︵‿︵‿︵‿︵*
*◥✥◤ ADMIN PANEL : 15K [ BULAN ]*
*︵‿︵‿︵‿︵︵‿︵‿︵‿︵︵‿︵‿︵‿︵*
*◥✥◤ KEUNTUNGAN ADMIN PANEL*
*┠ BISA OPEN RESELLER*
*┠ FREE SC CPANEL*
*┠ BISA CREAT PANEL SEPUASNYA*
*┠ DLL*
*︵‿︵‿︵‿︵︵‿︵‿︵‿︵︵‿︵‿︵‿︵*
*◥✥◤ ORDER : wa.me/${global.owner}*
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
*◥✥◤ KEUNTUNGAN BUY PANEL DI GW*
➠ NO DELAY
➠ BOT FAST RESPONE 
➠ SERVER AMAN
➠ BUKAN ASAL JUAL ( KUALITAS NO 1 )
➠ NO MALING SC
➠ HEMAT INTERNET
➠ HEMAT STORAGE
➠ WEB CLOSE, BOT JALAN
▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰▰
*◥✥◤ GARANSI 15 HARI*
_Mau Claim Garansi Wajib Ss Bukti Trx_
_All Trx No Reff*`
m.reply(lrm) 
break 
        case "panel": 
let text12 = `
CARA ADD USER PANEL :
ram user,nomer

contoh : 1gb Hardz,6282193421753

▬▭▬▭▬▭▬▭▬▭▬▭▬`
m.reply(text12) 
break;
              case "listusr": {
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await conn.reply(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
  m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break;
                case "crateadmin": {
let s = text.split(',');
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${_p + command} user,nomer`)
if (!username) return m.reply(`Ex :${_p + command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex :${_p + command} Username,@tag/nomor\n\nContoh :\n${_p + command}example,@user`)
let password = username + "019"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
  await conn.sendMessage(m.chat, {text: `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}`, 
    })
    await conn.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n

USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}

*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*
`,
    }); }
        break;
        case "listadmin": {
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list admin:\n\n";
  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }}}}
    handler.help = handler.command =  ["ramlist", "panel", "listusr", "crateadmin", "listadmin"];
handler.tags = ["panel", "host"]
handler.owner = true
handler.premium = true 
export default handler