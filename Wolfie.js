const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('My Self been Develop', {type: 'WATCHING'});
});

client.on('message', async message => {
    if(message.author.bot) return;

    if (message.content === '!about') {
      let aboutembed = new Discord.RichEmbed()
      .setTitle('Want to Know More About Me?')
      .setDescription('Ok. Im a Higj Tech Bot That Can do a lot of Stuff Example tell you How many Members are in your Server or in Other Server My Code is a open source you can fine on github i can do more but is time to do other stuff.')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/Wolfkid200444/FakeWolfkidBOT')
      .addField('Report Issues', 'https://github.com/Wolfkid200444/FakeWolfkidBOT/issues')
      .addField('Discord', 'http://bit.ly/FutureDevs')

      return message.channel.send(aboutembed);
    };

    if (message.content ==='!channel') {
      let channelembed = new Discord.RichEmbed()
      .setTitle('Wanna Check out Wolfie Channel?')
      .setURL('https://www.youtube.com/c/Wolfkid')
      .setColor('#FFFF00')

      return message.channel.send(channelembed);
    };

    if (message.content === '!info') {
      let infoembed = new Discord.RichEmbed()
      .setTitle('Information')
      .setDescription('This bot was created on 11 May 2018 by using code with Discord.js!')
      .addField('Owner', 'WolfKid200444')
      .addField('Twitter', 'https://mobile.twitter.com/@TheRealWolfkid/')
      .setColor('#FFFF08')

      return message.channel.send(infoembed);
    };

    if (message.content === '!changelog') {
      let changelogembed = new Discord.RichEmbed()
      .setTitle('Changelog')
      .setDescription('Check out Whats New on The Bot :D')
      .addField('May 11 2018 News', 'Code Added')
      .addField('May 14 2018 News Huge Update', 'Added Embeds To Commands And Alot')
      .setColor('#808000')
      
      return message.channel.send(changelogembed);
    };

    if (message.content === '!help') {
      let helpembed = new Discord.RichEmbed()
      .setDescription('Help Commands')
      .setColor('#FFFF00')
      .setField('!help-Command', 'Give this help Comamnd')

      return message.channel.send(helpembed);
    };
});

client.login(process.env.BOT_TOKEN);
