const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.members.first());

  let kickable = user.kickable ? "✅" : "❎";
  let bannable = user.bannable ? "✅" : "❎";
  let icon = user.user.displayAvatarURL;
  let nickname = user.nickname;

  if (nickname) {
    nickname = user.nickname;
  } else {
    nickname = 'None'
  };

  let createdAtRaw = user.user.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");
  let joinedAtRaw = user.joinedAt.toDateString();
  let joinedAt = joinedAtRaw.split(" ");
  let playingStatus = user.presence.game;
  if (playingStatus) {
    playingStatus = user.presence.game.name;
  } else {
    playingStatus = 'None'
  }

  let embed = new Discord.RichEmbed()
    .setTitle(`Information about ${user.user.tag}`)
    .setColor(config.red)
    .setThumbnail(icon)
    .addField('🙈 Username', user.user.tag, true)
    .addField('🙊 Nickname', nickname, true)
    .addField('🙉 User ID', user.id, true)
    .addField('📡 Status', user.presence.status, true)
    .addField('📱 Playing Status', playingStatus, true)
    .addField('👶 Account Created On', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
    .addField('🏘 Joined This Guild On', `${joinedAt[0]} ${joinedAt[2]} ${joinedAt[1]} ${joinedAt[3]}`, true)
    .addField('📥 Bannable', bannable, true)
    .addField('📥 Kickable', kickable, true);
  message.channel.send(embed);
  return
};

module.exports.help = {
  name: 'userinfo'
}
