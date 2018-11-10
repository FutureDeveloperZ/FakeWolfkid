const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {      
      let embed = new Discord.RichEmbed()
      .setTitle('NSFW Commands | prefix f; | Help NSFW ')
      .setDescription('There is 1 Available Command!')  
      .addField(':smirk: GENERAL', '``lewd,``')
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag} | Help list`, `${message.author.avatarURL}`)
      return message.channel.send(embed);

}
 
module.exports.help = {
  name: "help_nsfw"
}
