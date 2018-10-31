const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {

  if (!message.member.hasPermission(`${module.exports.help.permission}`)) return errors.noPermissions(message, `${module.exports.help.permission}`);
  if (!args[0]) return errors.emptyMessage(message);

  let inputmessage = args.join(' ');
  let embed = new Discord.RichEmbed()
    .setColor(config.green)
    .setDescription(inputmessage)
  message.delete().catch(O_o => {});
  message.channel.send(embed);
  return

};

module.exports.help = {
  name: 'say'

};
