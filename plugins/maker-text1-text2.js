let handler = async (m, { args, usedPrefix, command, conn }) => {
      if (command === 'tengkorak') {
let info = `
${htki} *TENGKORAK* ${htka}


██▀░░░░░░░░░░░░░▀██
█│░░░░░░░░░░░░░░░│█
▌│░░░░░░░░░░░░░░░│▐
░└┐░░░░░░░░░░░░░┌┘░
░░└┐░░░░░░░░░░░┌┘░░
░░┌┘▄▄▄░░░░░▄▄▄└┐░░
▌░│████▌░░░▐████│░▐
█░│▐██▀░░▄░░▀██▌│░█
█▌┘░░░░░▐█▌░░░░░└▐█
██░░▄▄▓░▀█▀░▓▄▄░░██
██▄─┘█▌░░░░░▐█└─▄██
███░░▐─┬┬┬┬┬─▌░░███
███▌░░┬┼┼┼┼┼┬░░▐███
████▄░└┴┴┴┴┴┘░▄████
█████▄░░░░░░░▄█████
`
m.reply(info)
}
if (command === 'halloween') {
let info = `
${htki} *HALLOWEEN* ${htka}

▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
`
m.reply(info)
}}
handler.help = handler.command = ['tengkorak', 'halloween']
handler.tags = ['logo']
export default handler