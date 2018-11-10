const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(!message.channel.nsfw) {return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)}
  else{
  randomPuppy('porn')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`PORN`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#FFFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
    return message.channel.send({ embed });
            })
  }
}
module.exports.help = {
	name: "porn"
}
