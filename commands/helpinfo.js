const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let helpeinfombed = new Discord.RichEmbed()
      .setTitle('Info commands | prefix ? | Info page ')
      .setDescription('There 5 Available Commands')
      .addField(':homes: GUILD', '``serverinfo``')
      .addField('📕 GENERAL', '``botinfo, changelog, userinfo``')
      .addField(':camping: MCPE', '``query, server``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help info`)
      return message.channel.send(helpeinfombed);
    
}
 
module.exports.help = {
  name: "help_info"
}
