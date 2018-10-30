const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Commands | prefix f; | Help List ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':newspaper: INFO', '8 commands available \n``help_info``')
      .addField(':tools: MODERATION', '3 commands available \n``help_mod``')
      .addField(':tada: FUN', '5 commands available \n``help_fun``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
