const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('How to Code!', {type: 'WATCHING'});
});

client.on('message', async message => {
    if (message.author.bot) return;
    let prefix = config.prefix;

    if (message.content === '!help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('Commands')
      .setDescription('There is available commands for this bot on list!')
      .addField('!help', 'Bot commands list!')
      .addField('!channel', 'Creator YouTube Channel')
      .addField('!dcinvite', 'Join our developer team on Discord server!')
      .addField('!info', 'Bot Information')
      .addField('!github', 'FutureDevelopers Github Team!')
      .addField('!changelog', 'View the New Updates that have bene made to the Bot!')
      .addField('!ver', 'View What Version is the Bot in.')
      .setColor('#FFFF08')
      return message.channel.send(helpembed);
    };

    if (message.content === '!about') {
      let aboutembed = new Discord.RichEmbed()
      .setTitle('Want to Know More About Me?')
      .setDescription('Ok. Im a High Tech Bot That Can do a lot of Stuff Example tell you How many Members are in your Server or in Other Server My Code is a open source you can fine on github i can do more but is time to do other stuff.')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/FutureDeveloperZ/FakeWolfkid')
      .addField('Report Issues', 'https://github.com/FutureDeveloperZ/FakeWolfkid/issues')
      .setDescription('Join the Discord', 'http://bit.ly/FutureDevs')
      return message.channel.send(aboutembed);
    };

    if (message.content === '!media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('This is Wolfie Social Media')
      .setField('YouTube', 'https://www.youtube.com/c/Wolfkid')
      .setField('Twitter', 'https://twitter.com/TheRealWolfkid')
      .setField('GitHub', 'https://github.com/Wolfkid200444')
      .setField('Fan Discord Server', 'http://bit.ly/WolfkidDiscord')
      .setField('Website', 'In Progress')
      .setColor('#FFFF00')
      return message.channel.send(mediambed);
    };

    if (message.content === '!ver') {
      let verembed = new Discord.RichEmbed()
      .setTitle('Version')
      .setDescription('This bot was created on 11 May 2018 by using code with Discord.js!')
      .setField('Version', 'FWK-1.2 Unstable')
      return message.channel.send(verembed);
    };

    if (message.content === '!changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changelog')
      .setDescription('Check out Whats New on The Bot :D')
      .addField('May 11 2018 News', 'Code Added')
      .addField('May 14 2018 News Huge Update', 'Added Embeds To Commands And Alot')
      .addField('May 18 2018 News', 'Added Help Command And Few Commands Working again')
      .setColor('#808000')
      return message.channel.send(changelogembed);
    };

    if (message.content === '!github') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('Check out our GitHub')
      .setURL('https://github.com/FutureDeveloperZ/')
      .setDescription('Check out our GitHub to view all of our code or our repository.')
      .setColor('#000000')
      return message.channel.send(githubembed);
    };

    if (message.content === '!dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Our Discord Invite')
      .setURL('http://bit.ly/FutureDevs')
      .setDecription('Check out our Discord server to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or on our GitHub')
      return message.channel.send(dcinviteembed);
    };
});

client.login(process.env.BOT_TOKEN);
