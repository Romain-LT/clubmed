const Discord = require('discord.js')
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on('message', msg => {
  if (msg.content === '!heil') {
    msg.reply('Sieg heil !')
  }
})

// client.login('NTc0MjM2MDc4NTM4NjIwOTI5.XM2xbQ.JOGzv2HcJQt9NG7IXUyXFvRmVQg')
client.login(process.env.BOT_TOKEN);