const express = require("express");
const app = express();
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/dreams", (request, response) => {
  response.json(dreams);
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});



const fs = require("fs");
const Discord = require ("discord.js")
const moment = require ("moment")
const YAXI = new Discord.Client();
const prefix = "Y!";


YAXI.login("ODUwNDUwMTg0OTYxMzkyNjUy.YLp5dA.rJ6PSyOXj1EW87UcDmCCX9BsDX0");
YAXI.on("ready", async () => {
  console.log(`Logged in as ${YAXI.user.username}!`);
  YAXI.user.setStatus("ONLINE");
  YAXI.user.setActivity(`Y!help`, { type: "WATCHING" });
  YAXI.guilds.cache.forEach(g => {
    if (g.member(YAXI.user).hasPermission("ADMINISTRATOR")) {
      g.fetchInvites().then(guildInvites => {});
    }
  });
});
////////

YAXI.on("message", message => {
  if (message.content === prefix + "about") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`                         
**[ invite ]**
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
YAXI.on("guildMemberAdd", member => {
  member.guild.fetchInvites().then(guildInvites => {
    const gamer = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => gamer.get(i.code).uses < i.uses);
    const inviter = YAXI.users.cache.get(invite.inviter.id);
    const channel = member.guild.channels.cache.find(
      channel => channel.name === "invite" 
    );
    channel.send(
      `__**<@${member.id}> **|invite kra la layan** | <@${inviter.id}> | **Zhmaray henan** |${invite.uses}**__`
    );
  });
});

