const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle('FakeWolfkid Info')
    .setDescription("FakeWolfkid is a open source code")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .addField("Developers", "Wolfkid")
    .addField("More", "[Youtube](https://www.youtube.com/c/Wolfkid) | [Twitter](https://twitter.com/TheRealWolfkid) | [Github](https://github.com/Wolfkid200444) | [Invite](https://discordapp.com/oauth2/authorize?client_id=444463875908304901&scope=bot&permissions=2146958591)");
    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
