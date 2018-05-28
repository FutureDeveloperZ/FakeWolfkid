const Discord = require('discord.js');
const superagent = require('superagent');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Neko Lewds!!!', {type: 'WATCHING'});
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
      .addField('info', 'Info about the Guild')
      .addField('avatar', 'See your profile picture But Bigger')
      .addField('changelog', 'View the New Updates that have bene made to the Bot!')
      .addField('botinfo', 'VIEW Bof Information and Versions')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag} | Help page 1`)
      return message.channel.send(helpembed);
    }

    if (message.content === prefix + 'info') {
      let aboutembed = new Discord.RichEmbed()
      .setFooter(`Do it JUST do IT ${message.author.tag}`)

      .setTitle('Want More Info About the Server?')
      .setDescription('Ok. Im a High Tech Bot That Can do a lot of Stuff Example tell you How many Members are in your Server or in Other Server My Code is a open source you can fine on GutHub i can do more but is time to do other stuff.')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/FutureDeveloperZ/FakeWolfkid')
      .addField('Report Issues', 'https://github.com/FutureDeveloperZ/FakeWolfkid/issues')
      .setDescription('Join the Discord', 'http://bit.ly/FutureDevs')
      return message.channel.send(aboutembed);
    }

    if (message.content === prefix + 'media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('This is Wolfie Social Media')
      .addField('YouTube', 'https://www.youtube.com/c/Wolfkid')
      .addField('Twitter', 'https://twitter.com/TheRealWolfkid')
      .addField('GitHub', 'https://github.com/Wolfkid200444')
      .addField('Fan Discord Server', 'http://bit.ly/WolfkidDiscord')
      .addField('Website', 'In Progress')
      .setColor('#FFFF00')
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
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(changelogembed);
    }

    if (message.content === prefix + 'github') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('Check out our GitHub')
      .setURL('https://github.com/FutureDeveloperZ/')
      .setDescription('Check out our GitHub to view all of our code or our repository.')
      .setColor('#000000')
      return message.channel.send(githubembed);
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
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(avatarembed)
   }
    
    if (message.content === prefix + 'lewd')
         message.delete().catch(O_o=>{});
      let {body}=await superagent
      .get("https://nekos.life/api/lewd/neko");
    if (!message.channel.nsfw) return message.reply("What are you doing? Go on a NsFW Channel!")
        
      let hentaiembed = new Discord.RichEmbed()
      .setTitle('Heres Your Lewds')
      .setColor('RANDOM')
      .setImage(body.neko)
      .setFooter(`Requested By ${message.author.tag}`)
      return message.channel.send(hentaiembed);
    

});

client.login(process.env.BOT_TOKEN);
