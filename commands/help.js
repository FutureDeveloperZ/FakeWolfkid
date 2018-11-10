const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Commands | prefix f; | Help List ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':newspaper: INFO', 'Information \n``help_info``')
      .addField(':tools: MODERATION', 'Mod Info \n``help_mod``')
      .addField(':tada: FUN', 'Fun Info \n``help_fun``')
      .addField(':camara: IMAGE', 'Img Info \n``help_img``')
      .addField(':hammer: OWNER', 'Bot Owner Info \n``help_owner``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help list`, `${message.author.avatarURL}`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
