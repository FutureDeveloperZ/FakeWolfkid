const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Commands | prefix f; | Help List ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':newspaper: INFO', '6 commands available \n``help_info``')
      .addField(':tools: MODERATION', '4 commands available \n``help_mod``')
      .addField(':tada: FUN', '5 commands available \n``help_fun``')
      .addField(':hammer: OWNER', '2 commamds avalible \n``help_owner``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
