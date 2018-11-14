const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(!message.channel.nsfw) return message.channel.send(`:underage: **This channel is not marked as NSFW!** :angry: `)
  randomPuppy('ecchi')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setTitle(`Ecchi NSFW`)
                .setImage(url)
                .setColor(`${message.guild.me.displayHexColor!=='#FFFFF' ? message.guild.me.displayHexColor : 0xffffff}`)
                .setTimestamp()
                .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
        return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "ecchi"
}
