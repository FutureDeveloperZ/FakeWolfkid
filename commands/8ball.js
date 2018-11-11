const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[2]) return message.reply("Ask a full question Please!");
  let replies = ["Yes", "No", "I don't know", "Maybe", "Try again later", "Without a doubt", "Concentrate and ask again", "Signs point to yes", "Don't count on it"];
  
  let result = Math.floor((Math.random() * replies.length));
  let question = args.join(" ")
  
  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag)
  .setColor("#FF0000")
  .addField(":thinking: Question:", question)
  .addField("Answer:", replies[result])
  .setTimestamp()
  .setFooter(`Requested by ${message.author.tag}`, `${message.author.avatarURL}`)
  
  message.channel.send(ballembed);
  
}

module.exports.help = {
  name:"8ball"
}
