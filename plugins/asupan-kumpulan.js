import axios from 'axios'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	await conn.sendMessage(m.chat, { react: { text: "🕐",key: m.key,}})
	let type = command.toLowerCase();
	
	switch (type) {
	  case 'china':
		let a = `https://api.zeltoria.my.id/api/asupan/china?apikey=Sange`;
		conn.sendFile(m.chat, a, '', `Done Ya Kak >.<`, m);
		break;
	  case 'indonesia':
		let b = `https://api.zeltoria.my.id/api/asupan/indonesia?apikey=Sange`;
		conn.sendFile(m.chat, b, '', `Done Ya Kak >.<`, m);
		break;
		  case 'korea':
		let c = `https://api.zeltoria.my.id/api/asupan/korea?apikey=Sange`;
		conn.sendFile(m.chat, c, '', `Done Ya Kak >.<`, m);
		break;
		  case 'malaysia':
		let d = `https://api.zeltoria.my.id/api/asupan/malaysia?apikey=Sange`;
		conn.sendFile(m.chat, d, '', `Done Ya Kak >.<`, m);
		break;
		  case 'japan':
		let e = `https://api.zeltoria.my.id/api/asupan/japan?apikey=Sange`;
		conn.sendFile(m.chat, e, '', `Done Ya Kak >.<`, m);
		break;
		 case 'thailand':
			let f = `https://api.zeltoria.my.id/api/asupan/thailand?apikey=Sange`;
		conn.sendFile(m.chat, f, '', `Done Ya Kak >.<`, m);
		break;
		 case 'cogan':		
    let g = await axios.get('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/cecan/cogan.json')
    let image = g.data.getRandom()
    conn.sendFile(m.chat, image, 'cogan.jpeg', null, m, false)
}
break;
    	  case 'vietnam':
			let h = `https://api.zeltoria.my.id/api/asupan/vietnam?apikey=Sange`;
		conn.sendFile(m.chat, h, '', `Done Ya Kak >.<`, m);
		break;
	  default:
	} 
  };
  
  handler.help = ['china', 'indonesia', 'korea', 'malaysia', 'japan', 'thailand', 'cogan', 'vietnam'];
  handler.tags = ['asupan'];
  handler.command = /^(china|indonesia|korea|malaysia|japan|thailand|cogan|vietnam)$/i;
  handler.premium = true
  
  export default handler;
  
