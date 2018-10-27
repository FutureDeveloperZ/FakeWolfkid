const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('Check Assassiner354 social media!')
      .setDescription('YouTube: [Youtube Channel](https://www.youtube.com/c/Wolfkid).\nTwitter: [Twitter](https://twitter.com/RealA354).\nGithub: [Github](https://github.com/A354-PH)')
      .setColor('RANDOM')
      return message.channel.send(mediaembed);
      
}

module.exports.help = {
  name:"media"
}
