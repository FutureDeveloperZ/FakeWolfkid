const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpfunembed = new Discord.RichEmbed()
      .setTitle('Fun Commands | prefix ? | Fun list')
      .setDescription('There is available commands for FUN!\n ``avatar, gayrate, ping, 8ball``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help fun`)
      return message.channel.send(helpfunembed);
      
}

module.exports.help = {
  name:"help_fun"
}
