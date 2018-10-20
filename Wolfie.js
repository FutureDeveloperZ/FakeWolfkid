const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const wolfaxtra = require('./wolfaxtra.js');
var S = require('string');


client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('With New Code | --> f; <--', {type: 'WATCHING'});
    console.log(" ###   #     #  #     #####  #     #  #####");
    console.log("#   #  # #   #  #       #    # #   #  #");
    console.log("#   #  #  #  #  #       #    #  #  #  ####");
    console.log("#   #  #   # #  #       #    #   # #  #");
    console.log(" ###   #     #  ####  #####  #     #  #####");
    console.log(`Bot name ${client.user.username}`)
});


client.on('message', async message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;

const args = message.content.slice(prefix.length).split(' ');
const command = args.shift().toLowerCase();


    if (message.content === prefix + 'help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('List Of Commands | prefix f; | Help List ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':newspaper: INFO', '8 Commands open \n``help info``')
      .addField(':tada: FUN', '2 Commands open \n``help fun``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);
    }
  
    if (message.content === prefix + 'help info') {
      let helpeinfombed = new Discord.RichEmbed()
      .setTitle('Info commands | prefix f; | Info page ')
      .setDescription('There is available commands for this Info \n``botinfo, changelog, dcinvite, media, userinfo, server``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help info`)
      return message.channel.send(helpeinfombed);
    }
      
    if (message.content === prefix + 'help fun') {
      let helpfunembed = new Discord.RichEmbed()
      .setTitle('Fun Comamnds | prefix f; | Fun list')
      .setDescription('There is available commands for FUN!\n ``avatar, gayrate``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help fun`)
      return message.channel.send(helpfunembed);
    }
    
    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('Check Wolfie Social Media')
      .setDescription('Check Wolfie [Youtube Channel ](https://www.youtube.com/c/Wolfkid).\n Check Wolfie [Twitter](https://twitter.com/TheRealWolfkid).\n Check Wolfie [Fan Discord Server](http://bit.ly/WolfkidDiscord).\nAnd Also Check Wolfie [Github](https://github.com/Wolfkid200444)')
      .setColor('RANDOM')
      return message.channel.send(mediaembed);
    }

    if (message.content === prefix + 'changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changelog')
      .setDescription('Check out Whats New on The Bot :D')
      .addField('September 26', 'New Stuff Again')
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(changelogembed);
    }
    
    if (message.content === prefix + 'dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Our support Discord server')
      .setDescription('Check out our [Discord server](http://bit.ly/FutureDevs) to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or on our GitHub')
      .setColor('DARK')
     return message.channel.send(dcinviteembed);
    }
    
   if (message.content === prefix + 'userinfo') {
     let userinfoembed = new Discord.RichEmbed()
     .setTitle(`${message.author.tag} User Info`)
     .setColor('RANDOM')
     .setThumbnail(client.user.avatarURL)
     .addField('Your ID', message.author.id, true)
     .addField('You Join at', message.member.joinedAt.toDateString(), true)
     .addField('Are you a Bot?', message.member.user.bot ? 'Yes' : 'No', true)
     .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(userinfoembed);
   }
   
   if (message.content === prefix + 'host') {
      let hostembed = new Discord.RichEmbed()
      .setTitle('Unavailable')
      .setDescription('Sorry :p')
      .setColor('WHITE')
      .setFooter(`${message.author.tag}`)
     return message.channel.send(hostembed);
    }
    
    if (message.content === prefix + 'server') {
        let serverembed = new Discord.RichEmbed()
        .setTitle('WolfGangMC Server')
        .setDescription('Check WolfGangMC discord Server [HERE](https://bit.ly/Join2Talk).\n\nVote for WolfGangMC [HERE](https://bit.ly/Vote4Rewards).\n\nIP:wolfgangmc.tk\nPORT:25748')
        .setColor('RANDOM')
        .setFooter('Made By Wolfkid')
     return message.channel.send(serverembed);
    }
     
    //Added This To Seperate Commands and stuff -- This Section is for Fun cmd
    
   if (message.content === prefix + 'avatar') {
     let avatarembed = new Discord.RichEmbed()
     .setTitle('Your Avatar!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL) 
     .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(avatarembed);
   }
  
  if (message.content === prefix + 'gayrate'){
    let user = message.mentions.users.first() || message.author;
    let gayembed = new Discord.RichEmbed()
    .setAuthor(`${user.username}`)
    .addField(`Gay Rate`, `You Are **${Math.floor(Math.random() * 101)}% Gay**! :gay_pride_flag:`)
    .setColor('RANDOM')
    .setFooter(`😉😉 | Requested by ${message.author.tag}`)
   return message.channel.send(gayembed)
  }

});
client.login(process.env.BOT_TOKEN);
