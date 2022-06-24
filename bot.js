const Discord = require('discord.js'); 
const config = require("./config.json"),
    token = config.token;   
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
let prefix = config.prefix,
    dono = config.dono; 

client.on('ready', () => {
   console.log("Iniciando...")
});



client.on('message', (message) => {
    
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return; 
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if(command === "ping"){

        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`> :ping_pong: **Pong! A latência é de: ${timeTaken}ms.**`);
      }
    
    if(command === "avatar") {
        
        let avatar = message.author.avatarURL({ dynamic: true, format: "png", size: 1024 });
        message.reply(avatar)
    }  


    });

    client.login(token);