const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!a")

bot.on('ready', function() {
    bot.user.setActivity("Bot d'Amenia à votre service - ahelp");
    console.log("Connecté - Pret à vous servir");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help"){
        var embed = new Discord.RichEmbed()
            .setTitle("Commandes")
            .setDescription("**Commandes du Bot : \n - !aserveurs : Affiche la liste des serveurs \n - !aforum : Donne l'adresse du Forum**")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534072135-icons8-aide-100.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
    }
    if (message.content === prefix + "serveurs"){
        var embed = new Discord.RichEmbed()
            .setTitle("PrisonRP")
            .setDescription("Nom : ----- \n IP : --.---.--.--- \n Slots : 50")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534071015-icons8-prisonnier-100-1.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("DarkRP")
            .setDescription("Nom : ----- \n IP : --.---.--.--- \n Slots : 50")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534104636-icons8-utilisateur-100-1.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("Metro 2033")
            .setDescription("Nom : ----- \n IP : --.---.--.--- \n Slots : 50")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534071165-icons8-physique-100.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("WesternRP")
            .setDescription("Nom : ----- \n IP : --.---.--.--- \n Slots : 50")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534071207-icons8-musique-country-100.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("ApocalypseRP")
            .setDescription("Nom : ----- \n IP : --.---.--.--- \n Slots : 50")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534071363-icons8-zombi-100.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
        var embed = new Discord.RichEmbed()
            .setTitle("RustRP")
            .setDescription("Nom : ----- \n IP : --.---.--.--- \n Slots : 50")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/33/3/1534356844-icons8-pioche-minecraft-100.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
    }

    if (message.content === prefix + "forum"){
        var embed = new Discord.RichEmbed()
            .setTitle("Forum")
            .setDescription("Le Forum : https://amenia-roleplay.fr/forums")
            .setThumbnail("https://image.noelshack.com/fichiers/2018/32/7/1534072001-ameniarp.png")
            .setColor("0xFFFF00")
        message.channel.send(embed);
    }
    
});
