const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let helpownerembed = new Discord.RichEmbed()
      .setTitle('Owner Commands | prefix f; | Owner list')
      .setDescription('There is available commands for OWNERS!\n ``leave, shutdown ``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help Owner`)
      return message.channel.send(helpownerembed);

}

module.exports.help = {
  name:"help_owner"
}
