const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpfunembed = new Discord.RichEmbed()
      .setTitle('Fun Commands | prefix f; | Fun list')
      .setDescription('There is 6 Available Commands ')
      .addField('📕 GENERAL', '``avatar, gayrate, ping, 8ball, poll, ascii ``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help fun`)
      return message.channel.send(helpfunembed);
      
}

module.exports.help = {
  name:"help_fun"
}
