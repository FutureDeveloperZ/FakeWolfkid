const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpmodembed = new Discord.RichEmbed()
      .setTitle('Mod Commands | prefix f; | Mod list')
      .setDescription('There is available commands for MOD!\n ``kick, ban, mute, purge``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help mod`)
      return message.channel.send(helpmodembed);
      
}
 
module.exports.help = {
  name: "help_mod"
}
