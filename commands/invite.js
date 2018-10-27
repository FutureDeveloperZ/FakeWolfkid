const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let inviteembed = new Discord.RichEmbed()
      .setTitle('Discord Invite')
      .setDescription('PRIVATE BOT UNTIL I RELEASE IT')
      .addField('Want the code will search it [HERE](https://github.com/FutureDeveloperZ/FakeWolfkid)')
      .setColor('DARK')
      return message.channel.send(inviteembed);
}

module.exports.help = {
  name:"invite"
}
