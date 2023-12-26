import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  rmSync, 
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command, args }) => {
 if (command === 'clearsesi' || command === 'clearsession') {
conn.reply(m.chat, 'Succes !', m)

const session = [tmpdir(), join(__dirname, '../sessions')]
  const filename = []
  session.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    if (file == 'creds.json') return
    unlinkSync(file)})}
else if (command === 'cleartmp') {
 const dir = './tmp'
 readdirSync(dir).forEach(f => rmSync(`${dir}/${f}`));
 let pesan = `The \`\`\`tmp folder\`\`\` has been cleaned`
 await m.reply(pesan)
}}
handler.tags = ['owner']
handler.help = handler.command = /^(clearsesi|clearsession|cleartmp)$/i
handler.owner = true
export default handler