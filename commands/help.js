const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let helpembed = new Discord.RichEmbed()
      .setTitle('List of Commands | prefix f; | Help List ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':newspaper: INFO', 'Information \n``help_info``')
      .addField(':tools: MODERATION', 'Mod Commans \n``help_mod``')
      .addField(':tada: FUN', 'Fun Commands \n``help_fun``')
      .addField(':camera: IMAGE', 'Img Commands \n``help_img``')
      .addField(':smirk: NSFW', 'NSFW Commands \n``help_nsfw``')
      .addField(':hammer: OWNER', 'Bot Owner Commands \n``help_owner``')
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | Help list`, `${message.author.avatarURL}`)
      return message.channel.send(helpembed);

}
 
module.exports.help = {
  name: "help"
}
