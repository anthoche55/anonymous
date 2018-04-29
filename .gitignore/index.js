const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("anonyme,§help");
    console.log("Le bot est bien ete connecte");
});

bot.login("NDQwMDk0NTQwNDE0NTgyNzg1.DcfJhw.3s50KKQiJ1tFPefw6Cml49jTh7k");
