const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

 if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

};

module.exports.help = {
  name: 'say'

};
