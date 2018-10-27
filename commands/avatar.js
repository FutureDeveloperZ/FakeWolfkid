const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let avatarembed = new Discord.RichEmbed()
     .setTitle('Your Avatar!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL) 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(avatarembed);
}

module.exports.help = {
  name:"avatar"
}
