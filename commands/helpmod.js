const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpmodembed = new Discord.RichEmbed()
      .setTitle('Mod Commands | prefix f; | Mod list')
      .setDescription('There are 6 mod Commands Avalible!')
      .addField(':homes: GUILD', '``addrole, removerole``')
      .addField('📕 GENERAL', '``kick, ban, purge, tempmute``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help mod`)
      return message.channel.send(helpmodembed);
      
}
 
module.exports.help = {
  name: "help_mod"
}
