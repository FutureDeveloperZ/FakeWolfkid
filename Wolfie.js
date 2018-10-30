const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const wolfaxtra = require('./wolfaxtra.js');
var S = require('string');

const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});


client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('JOIN WOLFGANGMC | f;', {type: 'WATCHING'}); 
    console.log(" ###   #     #  #     #####  #     #  #####");
    console.log("#   #  # #   #  #       #    # #   #  #");
    console.log("#   #  #  #  #  #       #    #  #  #  ####");
    console.log("#   #  #   # #  #       #    #   # #  #");
    console.log(" ###   #     #  ####  #####  #     #  #####");
    console.log(`Bot name ${client.user.username}`)
});


client.on('message', async message => {
    if(message.author.bot) return;
    if (message.channel.type === 'dm') return;
  
    let prefix = config.prefix
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(client,message,args);
});

client.login(process.env.BOT_TOKEN);
