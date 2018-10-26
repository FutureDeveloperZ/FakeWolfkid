const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

const wolfaxtra = require('./wolfaxtra.js');
var S = require('string');


client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Check out WOLFGANG | --> f; <--', {type: 'WATCHING'});
    console.log(" ###   #     #  #     #####  #     #  #####");
    console.log("#   #  # #   #  #       #    # #   #  #");
    console.log("#   #  #  #  #  #       #    #  #  #  ####");
    console.log("#   #  #   # #  #       #    #   # #  #");
    console.log(" ###   #     #  ####  #####  #     #  #####");
    console.log(`Bot name ${client.user.username}`)
});


client.on('message', async message => {
    if(message.author.bot) return;
    let prefix = config.prefix

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);


    if (message.content === prefix + 'help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('List Of Commands | prefix f; | Help List ')
      .setDescription('There is available commands for this bot on list!')
      .addField(':tools: MOD', '2 Commands open \n``help mod``')
      .addField(':newspaper: INFO', '8 Commands open \n``help info``')
      .addField(':tada: FUN', '2 Commands open \n``help fun``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help list`)
      return message.channel.send(helpembed);
    }
  
    if (message.content === prefix + 'help mod') {
      let helpmod = new Discord.RichEmbed()
      .setTitle('Mod Commands | prefix f; | Mod Page ')
      .setDescription('There is available commands for this Mod \n``ban, kick``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help Mod`)
      return message.channel.send(helpmodembed);
    }
  
    if (message.content === prefix + 'help info') {
      let helpeinfombed = new Discord.RichEmbed()
      .setTitle('Info commands | prefix f; | Info page ')
      .setDescription('There is available commands for this Info \n``botinfo, changelog, dcinvite, media, userinfo, server_pe, serverinfo``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help info`)
      return message.channel.send(helpeinfoembed);
    }
      
    if (message.content === prefix + 'help fun') {
      let helpfunembed = new Discord.RichEmbed()
      .setTitle('Fun Comamnds | prefix f; | Fun list')
      .setDescription('There is available commands for FUN!\n ``avatar, gayrate``')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help fun`)
      return message.channel.send(helpfunembed);
    }
    
    // INFO Command List!
    
    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('Check Wolfie Social Media')
      .setDescription('Check Wolfie [Youtube Channel](https://www.youtube.com/c/Wolfkid).\n Check Wolfie [Twitter](https://twitter.com/TheRealWolfkid).\n Check Wolfie [Minecraft Server](http://bit.ly/WolfkidDiscord).\nAnd Also Check Wolfie [Github](https://github.com/Wolfkid200444)')
      .setColor('RANDOM')
      return message.channel.send(mediaembed);
    }

    if (message.content === prefix + 'changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changelog')
      .setDescription('Check out Whats New on The Bot :D')
      .addField('September 26', 'New Stuff Again')
      .addField('October 23', 'Fix some Bugs And added small stuff')
      .addField('October 26', 'Added Mods Commands and Ping')
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
    
    if (message.content === prefix + 'server_pe') {
        let serverembed = new Discord.RichEmbed()
        .setTitle('WolfGangMC Server')
        .setDescription('Check WolfGangMC discord Server [HERE](https://bit.ly/Join2Talk).\n\nVote for WolfGangMC [HERE](https://bit.ly/Vote4Rewards).\n\nOur Forums [HERE](http://wolfgangmc.freeforums.net) \n\nIP:wolfgangmc.tk\nPORT:25748')
        .setColor('RANDOM')
        .setFooter('Made By Wolfkid')
     return message.channel.send(serverembed);
    }
     
   if (message.content === prefix + 'serverinfo'){
     let sicon = message.guild.iconURL;
     let serverembed = new Discord.RichEmbed()
     .setDescription("Server Information")
     .setColor("RANDOM")
     .setThumbnail(sicon)
     .addField("Server Name", message.guild.name)
     .addField("Created On", message.guild.createdAt)
     .addField("You Joined", message.member.joinedAt)
     .addField("Total Members", message.guild.memberCount);
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
  
  if (message.content === prefix + 'ping'){
    let pingembed = new Discord.RichEmbed()
    .setTitle('Your Ping Daddy')
    .addField(`Your ping is...`, `**${Math.round(client.ping)}** MS!`)
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag}`)
   return message.channel.send(pingembed)
  } 
   
   
   // MOD Commands
   
       if (cmd === prefix + 'kick'){

      //!kick @daeshan askin for it

      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("Can't find user!");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Dont Even Try it Brah!");
      if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find(`name`, "strikes");
      if(!kickChannel) return message.channel.send("Can't find srikes channel.");

      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);

      return;
    }
   
       if (cmd === prefix + 'ban'){

      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!bUser) return message.channel.send("Can't find user!");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Dont even try it brah!");
      if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Banned User", `${bUser} with ID ${bUser.id}`)
      .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", bReason);

      let incidentchannel = message.guild.channels.find(`name`, "strikes");
      if(!incidentchannel) return message.channel.send("Can't find strikes channel.");

      message.guild.member(bUser).ban(bReason);
      incidentchannel.send(banEmbed);


      return;
   }
    
});
client.login(process.env.BOT_TOKEN);