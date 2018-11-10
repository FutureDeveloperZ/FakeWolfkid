const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if 
    
  const rando_imgs = [
'https://media.tenor.com/images/54cfb760a96b8139cd8b6134acc73050/tenor.gif',
'https://media.tenor.com/images/56300d24c8ceeafbd204a6478985dd6d/tenor.gif',
'https://media.tenor.com/images/9c952d8b503e85590de717ef257d1df3/tenor.gif',
'https://media.tenor.com/images/204ebf47b97fe2a468ee233165c5fa89/tenor.gif',
]

 let random = rando_imgs[Math.floor(Math.random() * rando_imgs.length)]
  
  let gifphy = new Discord.RichEmbed()
  .setColor("GRAY")
  .setTitle("Gifphy Command")
  .setDescription("[**Gifphy Fortnite**]")
  .setImage(random)
            
  message.channel.send(gifphy)
}
  
    module.exports.help = {
        name: "gifphy"
    }
