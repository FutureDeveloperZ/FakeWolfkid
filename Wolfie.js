const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Let Me Work Ok!!', {type: 'WATCHING'});
    console.log('BOI I\'m ready!');
});

client.on('message', async message => {
    if (message.author.bot) return;
    let prefix = config.prefix;

    if (message.content === prefix + 'help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('Simple Comamnds | prefix ! ')
      .setDescription('There is available commands for this bot on list!')
      .addField('help', 'Bot commands list!')
      .addField('media', 'Check The Bot Creator Website/Media')
      .addField('dcinvite', 'Join our developer team on Discord server!')
      .addField('serverinfo', 'Info about the server')
      .addField('avatar', 'See your profile picture But Bigger')
      .addField('changelog', 'View the New Updates that have bene made to the Bot!')
      .addField('botinfo', 'VIEW Bof Information and Versions')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help page 1`)
      return message.channel.send(helpembed);
    }
    
    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('This is Wolfie Social Media')
      .addField('YouTube', 'https://www.youtube.com/c/Wolfkid')
      .addField('Twitter', 'https://twitter.com/TheRealWolfkid')
      .addField('GitHub', 'https://github.com/Wolfkid200444')
      .addField('Fan Discord Server', 'http://bit.ly/WolfkidDiscord')
      .addField('Website', 'In Progress')
      .setColor('RANDOM')
      return message.channel.send(mediaembed);
    }

    if (message.content === prefix + 'botinfo') {

      let botinfoembed = new Discord.RichEmbed()
      .setTitle('BotInfo')
      .setDescription('Here is were you can find About the Bot Info!')
      .addField('Version', 'FWK-1.2 Unstable')
      .setImage(bot.user.avatarURL)
      .addField('Bot Created', bot.user.createdAt)
	      .addField('Bot Username', bot.user.username)
      return message.channel.send(botinfoembed);
    }

    if (message.content === prefix + 'changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changelog')
      .setDescription('Check out Whats New on The Bot :D')
      .addField('May 11 2018 News', 'Code Added')
      .addField('May 14 2018 News Huge Update', 'Added Embeds To Commands And Alot')
      .addField('May 18 2018 News', 'Added Help Command And Few Commands Working again')
      .addField('May 27 2018 News', 'Added Footers to Commands and Avatar Command')
      .addField('May 30 2018 News', 'Remove Lewd Command as i bring alot of problems plus Adding Commands')
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(changelogembed);
    }
    
    if (message.content === prefix + 'dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Click Here to Our Discord Invite')
      .setURL('http://bit.ly/FutureDevs')
      .setDescription('Check out our Discord server to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or on our GitHub')
      return message.channel.send(dcinviteembed);
    }
    
   if (message.content === prefix + 'avatar') {
     let avatarembed = new Discord.RichEmbed()
     .setTitle('Avatar!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=0") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(avatarembed)
   }
   
});
client.login(process.env.BOT_TOKEN);
