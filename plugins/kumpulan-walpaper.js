import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command  }) => {
switch (command) {
case 'technology': case 'aesthetic': case 'art': case 'gamewallpaper': case 'mountain': case 'programming': case 'tatasurya': case 'wallml': case 'wallhp': case 'wallnime': case 'cyber': case 'hekel': case 'GameWallp': case 'motor': case 'mobil':{
let link
if (/technology/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/technology.json')).json()
if (/aesthetic/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/aesthetic.json')).json()
if (/art/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/art.json')).json()
if (/gamewallpaper/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/gamewallpaper.json')).json()
if (/mountain/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mountain.json')).json()
if (/progamming/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/programming.json')).json()
if (/tatasurya/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/tatasurya.json')).json()
if (/wallml/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallml.json')).json()
if (/wallhp/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallhp.json')).json()
if (/wallmlnime/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/wallnime.json')).json()
if (/cyber/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/cyber.json')).json()
if (/hekel/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json')).json()
if (/GameWallp/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/inirey/RESTAPI/master/data/GameWallp.json')).json()
if (/motor/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/motor.json')).json()
if (/mobil/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/KirBotz/nyenyee/master/mobil.json')).json()
if (/cyber/.test(command)) link = await (await fetch('https://raw.githubusercontent.com/inirey/RESTAPI/master/data/hekel.json')).json()
let img = link[Math.floor(Math.random() * link.length)];
conn.sendMessage(m.chat, { image: { url: img }, caption: `${command}` }, { quoted: m })
      break;
    }
  }
};
handler.tags = ['wallpaper']
handler.help = handler.command = ['technology', 'aesthetic', 'art', 'gamewallpaper', 'mountain', 'programming', 'tatasurya', 'wallml', 'wallhp', 'wallmlnime', 'cyber', 'hekel', 'GameWallp', 'motor', 'mobil', 'boneka', 'boruto', 'bts', 'cecan', 'chiho', 'chitoge', 'cogan', 'cosplay', 