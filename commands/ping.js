const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pingembed = new Discord.RichEmbed()
    .setTitle('Your Ping')
    .addField('Ping! Me Harder Daddy', `**${Math.round(message.author.ping)} ms!**`)
    .setFooter(`Requested by ${message.author.tag} | Help fun`)
    return message.channel.send(pingembed);
}

module.exports.help = {
  name:"ping"
}
