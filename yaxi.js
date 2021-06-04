
**[ click here ](https://discord.com/api/oauth2/authorize?client_id=802889834393239552&permissions=8&scope=bot)** 
**[ support ]**
**[ click here ](https://discord.gg/K3s4Gv76jd)**`)
      .setColor("BLACK")
    
      .addField("`my name`", `** ${YAXI.user.tag} **`, true)

      .addField("`Server`", `**${YAXI.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${YAXI.users.cache.size}  Users**`, true)
    
    
     .addField( "`developer bot` ",`<@711293222852362290>`,true)


      .setImage("https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    
    message.channel.send(embed);
    message.react("<a:jano_27:799630916820795422>");
  }
});

//////////

YAXI.on("message", message => {
  if (message.content === prefix + "invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle(" click to  bot ")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=802889834393239552&permissions=8&scope=bot"
      );
    message.channel.send(embed);
     message.react("<a:jano_27:799630916820795422>");
  }
});
/////////
////// code invite vr 12 by yaxi///////
const invites = {};
const wait = require("util").promisify(setTimeout);
YAXI.on("ready", () => {
  wait(1000);
  YAXI.guilds.cache.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  }); 
});
///////////////////
YAXI.on(", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = YAXI.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      => channel.name === "invite" 
    )
    channel.send(
      `__**<@${member.id}> **|invite kra la layan** | <@${inviter.id}> | **Zhma
});
