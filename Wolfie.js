const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('How to Code!', {type: 'WATCHING'});
});

client.on('message', async message => {
    if(message.author.bot) return;

    if (message.content === '!help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('ImpladeBot Commands List')
      .setDescription('There is available commands for this bot on list!')
      .addField('!help', 'Bot commands list!')
      .addField('!channel', 'Creator Youtube Channel')
      .addField('!dcinvite', 'Join our developer team on Discord server!')
      .addField('!info', 'Bot Information')
      .addField('!github', 'FutureDevelopers Github Team!')
      .addField('!ver', 'Bot Server Status')
      .setColor('#FFFF08')

      return message.channel.send(helpembed);
    };
 
    if (message.content === '!about') {
      let aboutembed = new Discord.RichEmbed()
      .setTitle('Want to Know More About Me?')
      .setDescription('Ok. Im a High Tech Bot That Can do a lot of Stuff Example tell you How many Members are in your Server or in Other Server My Code is a open source you can fine on github i can do more but is time to do other stuff.')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/Wolfkid200444/FakeWolfkidBOT')
      .addField('Report Issues')
      .setDescription('[Check Out My Discord](http://bit.ly/FutureDevs)')


      return message.channel.send(aboutembed);
    };

    if (message.content === '!media') {
      let mediaembed = new Discord.RichEmbed()
      .setTitle('This is Wolfie Social Media')
      .setField('Is Youtube', ' Is Your is www.youtube.com/c/Wolfkid')
      .setField('Is Twitter', 'Check out WolfKid (@TheRealWolfkid): https://twitter.com/TheRealWolfkid?s=09')
      .setField('Is github', 'My Github is github.com/Wolfkid200444')
      .setField('My  FanDiscord Server', 'bit.ly/WolfkidDiscord')
      .setField('My Website', 'In Progress')
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
      .setTitle('Check Out our Github')
      .setDescription('Check out our [github](github.com/FutureDeveloperz) to view all of our code or our repository')
      .setColor('#000000')
      
      return message.channel.send(githubembed);
    };
    
    if (message.content === '!dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('Our Discord Invite')
      .setDecription('Check out our Discord server to get news of FakeWolfkid and if you have issues with the bot or not working property you can report it on #report or jn our Github')
      .setField('The Link', 'The link is bit.ly/FutureDevs')
      .setURL('bit.ly/FutureDevs')
      
      return message.channel.send(dcinviteembed);
    };
});

client.login(process.env.BOT_TOKEN);
