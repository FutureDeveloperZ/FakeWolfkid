const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  if (message.author.id !== `${config.ownerid}`) return errors.ownersOnly(message);
  if (message.author.id == `${config.ownerid}`) {
    let embed = new Discord.RichEmbed()
      .setTitle(`It's time for ${client.user.username} to go!!!`)
      .setColor(config.red)
      .setDescription('Seeee ya Suckers!...')
    message.channel.send(embed);
    message.guild.leave();
    return
  }

};

module.exports.help = {
  name: 'leave'

};
