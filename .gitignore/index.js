const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("*");

bot.on("ready",function() {
    bot.user.setGame("anonyme,*help");
    console.log("Le bot est bien été connecté");
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
        message.channel.send('voici les commandes du bot :\n -*help pour afficher les commandes');
        message.channel.send('\n -*ban pour bannir un personne');
        message.channel.send('\n -*kick pour kicker un personne du serveur');
        console.log("liste des commandes demander !");
    }
});


bot.on('message', message => {
    let command = message.content.split(" ")[0];
    const args = message.content.slice(prefix.length).split(/ +/);
    command = args.shift().toLowerCase();

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "👑👮Leader👮👑");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Merci de mentionner l'utilisateur à expluser.").catch(console.error);
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        if(!kickMember) {
            return message.reply("Cet utilisateur est introuvable ou impossible à expluser.")
        }
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply("Je n'ai pas la permission KICK_MEMBER pour faire ceci.").catch(console.error);
        }
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} a été expulsé avec succès.`).catch(console.error);
            message.guild.channels.find("name", "commande-bot").send(`**${member.user.username} a été expulsé du discord par **${message.author.username}**`)
        }).catch(console.error) 
    
    }

    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "👑👮Leader👮👑");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
        member.ban().then(member => {
            message.reply(`${member.user.username} a été banni avec succès.`).catch(console.error);
            message.guild.channels.find("name", "commande-bot").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
        }).catch(console.error)

    }})

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
