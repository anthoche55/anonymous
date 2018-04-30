const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on("ready",function() {
    bot.user.setGame("anonyme,§help");
    console.log("Le bot est bien ete connecte");
});

bot.login("NDQwMDk0NTQwNDE0NTgyNzg1.DcfJhw.3s50KKQiJ1tFPefw6Cml49jTh7k");

bot.on('message',message => {
    if (message.content === prefix + "salut ca va ?"){
        message.reply("oui et toi");
        console.log("yes");
    }

});
bot.on('message',message => {
    if (message.content === prefix + "tu fait quoi"){
        message.reply("je te parle et toi");
        console.log("yes");
    }

});
bot.on('message',message => {
    if (message.content === prefix + "je t'aime ❤️"){
        message.reply("moi aussi ❤️");
        console.log("yes");
    }

});
bot.on('message',message => {
    if (message.content === prefix + "tu va me respecter maintenant"){
        message.reply("oui maitre je vous respecte");
        console.log("yes");
    }

});

bot.on('message',message => {
    if (message.content === prefix + "rien"){
        message.reply("daccord");
        console.log("yes");
    }

    if (message.content === prefix + "help"){
        message.channel.send('voici les commandes du bot :\n -§help pour afficher les commandes');
        console.log("commande help demmandée !");
    }
});

bot.on("guildMemberAdd", member => {
    member.guild.channel.find("name", "Bienvenue").send(`Bienvenue ${member}`)
})

bot.on("GuildMemberRemove", member => {
    member.guild.channels.find("name", "Bienvenue").send(`${member} vien de quitter`)
})

bot.on(`guildMemberAdd`, member => {
    var role = member.guild.roles.find('name', '✌Membre✌');
    member.addRole(role)
})
