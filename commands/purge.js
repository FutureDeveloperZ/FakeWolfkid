const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Usage: ?purge (number of messages ex. 2000)");
  if(!args[0]) return message.channel.send("Usage: ?purge (number of messages ex. 2000)");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(3000));
});

}

module.exports.help = {
  name: "purge"
}
