const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let embed = new Discord.RichEmbed()
      .setTitle('Image Commands | prefix f; | Image list')
      .setDescription('There is 6 Available Commands ')
      .addField('📕 GENERAL', '`achievement, ``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help Image`, `${message.author.avatarURL})
      return message.channel.send(embed);
      
}

module.exports.help = {
  name:"help_img"
}
