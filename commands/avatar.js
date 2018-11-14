const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     let user = message.mentions.users.first() || message.author;
     let avatarembed = new Discord.RichEmbed()
     .setTitle(`${message.author.tag} Avatar`)
     .setColor('RANDOM')
     .setImage(message.author) 
     .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
     return message.channel.send(avatarembed);
}

module.exports.help = {
  name:"avatar"
}
