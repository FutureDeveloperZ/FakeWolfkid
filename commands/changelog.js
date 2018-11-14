const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let changelogembed = new Discord.RichEmbed()
    .setTitle('Changelog')
    .setDescription('Check out Whats New ')
    .addField('September 26', 'New Stuff Again')
    .addField('October 23', 'Fix some Bugs And added small stuff')
    .addField('October 26', 'Added Moderator Commands')
    .addField('October 27', 'BIG UPDATE!')
    .addField('November 7', '2.0 UPDATE OUT')
    .setColor('#808000')
    .setFooter(`Requested by ${message.author.tag} | © 2018 `)
    return message.channel.send(changelogembed);
    
}

module.exports.help = {
  name:"changelog"
}
