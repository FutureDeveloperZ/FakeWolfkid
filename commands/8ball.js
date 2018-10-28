const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var random = Math.floor(Math.random() * config.eightBall.length);
    message.reply(config.eightBall[random]);
    break;

module.exports.help = {
  name:"8ball"
}
