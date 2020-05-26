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

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find('name', 'officiers');
  let memberAvatar = member.user.avatarURL;
      if(!channel) return;
      let embed = new Discord.RichEmbed()
          .setColor('GREEN')
          .setThumbnail(memberAvatar)
          .addField('ARRIVÉ' , ` ${member} vient de rejoindre le discord`)
          
      channel.send(embed);
});

client.on('guildMemberRemove', member => {
  let channel = member.guild.channels.find('name', 'officiers');
  let memberAvatar = member.user.avatarURL;
      if(!channel) return;
      let embed = new Discord.RichEmbed()
          .setColor('RED')
          .setThumbnail(memberAvatar)
          .addField('DÉPART' , ` ${member} vient de quitter le discord`)
          
      channel.send(embed);
});

// client.login(process.env.BOT_TOKEN);
client.login('NzE0NzYxMTUyNDk1ODc4MjE1.XsznSw.5P_EKdC7YLpXQjQj0MipA7VGZC4');