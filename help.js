const Discord = require('discord.js');

module.exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()
            .setColor('#f382fc')
            .setThumbnail(message.author.displayAvatarURL)
            .addBlankField()
            .addField("**:underage:  → play**", "``/stop ``" + "** **" + "``/skip``" + " ``/disconnect``" + " ``/lyrics``" + " ``/join ``" + "** **" + " ``/replay``" + "** **" + " ``?ass``" + "** **" + " ``?hentaigif``" )
            .addBlankField()
            .setFooter(`• ${client.user.username}`, client.user.avatarURL)   
            message.channel.send(embed);

    }

    module.exports.help= {
        name: "music"
    };
