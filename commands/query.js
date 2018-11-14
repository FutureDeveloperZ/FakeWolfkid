//You May Not Reproduce This Code Or You Will Be DCMA
//Meaning ur not able to copy this code or ur repo 
//will be taken down so dont do it 
//© ThePandazManYT & Wolfkid200444 2018

const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {

let a = args[1]
var request = require('request');

if(a == null){
	a = 19132
}
	
        var url = 'https://use.gameapis.net/mcpe/query/extensive/'+args[0]+":"+a
        let res = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle("Query Usage")
        .setTimestamp()
        .setThumbnail(`https://cdn.discordapp.com/attachments/505849614121828367/510126675128745985/unnamed.png`)
        .setFooter(`DOPE? or NOPE ${message.author.username}`, `${message.author.avatarURL}`)
        .addField("󠂪:white_check_mark: Usage: 󠂪", "**query <server ip> <port>**\n 󠂪 󠂪󠂪 󠂪", true)
      if(!args[0]) return message.channel.send(res);
        request(url, function(err, response, body) {
            if(err) {
                console.log(err);
                return message.reply('Error getting Minecraft server status...');
            }
         
          body = JSON.parse(body);
          let Omsg = new Discord.RichEmbed()
          .setColor("RED")
          .setTitle("Query ERROR Message")
	        .setThumbnail(`https://cdn.discordapp.com/attachments/505849614121828367/510126675128745985/unnamed.png`)
          .addField("󠂪 󠂪", "🚫 Server Is Either Offline Or Is Not A MCPE Server 🚫", true)
          .setTimestamp()
          .setFooter("Correct Usage: query <ip> [port]")
          
let stat = body.status
if(stat == false) return message.channel.send(Omsg);
let white = body.cached
if(white == true){
  white = ["Enabled"];
}
if(white == false){
  white = ["Disabled"]
}
let list = body.list
if(list == null){
  list = ["None"]
}

          let query = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("Query Command")
          .setTimestamp()
	        .setThumbnail(`https://cdn.discordapp.com/attachments/505849614121828367/510126675128745985/unnamed.png`)
          .setFooter("🔐 Whitelist:" + `${white}`)
          .addField("🖇️ VERSION", "```" + `${body.hostname}:${body.port}` + "```", true)
          .addField("💾 SOFTWARE", "```" + `${body.software}` + "```", true)
          .addField("📋 Protocol",  "```" + `${body.protocol}` + "```", true)
          .addField("🎉 MOTD", "```" + `${body.motd}` + "```", true)
          .addField("⚒️ MAP", "```" + `${body.map}` + "```", true)
          .addField("💻 PLUGINS", "```" + `${body.plugins}` + "```", true)
          .addField("👥 PLAYER LIST", "```" + `${body.list}` +  "```", true)          

          message.channel.send(query)

        });
}
                        

module.exports.help = {
 name: "query"
}