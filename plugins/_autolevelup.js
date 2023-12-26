//import { color } from "../lib/function/color.js"

import moment from "moment-timezone"
import { xpRange, canLevelUp } from "../lib/function/levelling.js"
import canvafy from "canvafy"

export async function before(m) {
	var usr = db.data.users[m.sender]
	var { min, xp, max } = xpRange(usr.level, multiplier)
	var ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch((_) => "https://cdn.jsdelivr.net/gh/SazumiVicky/MakeMeow-Storage@main/levelup.jpg");
	var pp = await (await fetch(ppUrl)).buffer();
	var curr = usr.exp - min
	var minxp = max - usr.exp
	//if (!usr.autolevelup) return !0
	var before = usr.level * 1
	while (canLevelUp(usr.level, usr.exp, multiplier)) usr.level++
	
	if (before !== usr.level) {
		var chating = ` *L E V E L - U P!!*
_Selamat *${conn.getName(m.sender)}* kamu naik Level ✨_

*•Level:* *${before}* ➠ *${usr.level}* 
*•Rank Anda Sekarang:* *${usr.role}*

[ N O T E ]
Sering Sering Interaksi dengan Bot agar dapat levelup lebih cepat`.trim()
conn.reply(m.chat, chating, m, adReply)
	/*
	var p = await new canvafy.LevelUp()
		. setLevels(before,usr.level)
		. setUsername(conn.getName(m.sender))
		. setBackground("color","#fff")
		. setAvatar(pp)
		. setBorder("#FFDF00")
		. setAvatarBorder("#FFDF00")
		. setOverlayOpacity(1.0)
		p.build()
		.then(data => {
			//console.log(color(chating, 'yellow'))
			conn.sendFile(m.chat, data, "RankCard.png", chating, m)
	  })*/
	}
}