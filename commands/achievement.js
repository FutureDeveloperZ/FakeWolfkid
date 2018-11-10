const snekfetch = require('snekfetch');
const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let contents = args.join(" ")
  let noarg = new Discord.RichEmbed()
       .setColor("RED")
       .setTimestamp()
       .setTitle("Usage: Achievement <ur crappy msg>")

  let title = "Achievement Get!"
  
if(!contents) return message.channel.send(noarg)
	
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if(title.length > 22 || contents.length > 22) return message.edit("Max Length: 22 Characters. Soz.").then(message.delete.bind(message), 2000);
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  message.delete();

}
module.exports.help = {
	name: "achievement"
}
