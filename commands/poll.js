const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

let arg = args.join(" ")

let noarg = new Discord.RichEmbed()
.setColor("RED")
.setTitle("Usage: poll <question>")

if(!arg) return message.channel.send(noarg)


let poll = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Poll Command")
.addField("React Below To Vote", `${arg}`, true)
.setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)

let msg = await message.channel.send(poll)
await msg.react("👍")
await msg.react("👎")

message.delete();
console.log(`${message.author.tag} Used The Poll Command In ${message.guild.name}`)
console.log(`The Question Was ${args}`)
}

module.exports.help = {
  name: "poll"
}
