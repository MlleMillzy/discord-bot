const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// CELA DOIT ÊTRE DE CETTE MANIÈRE

client.login(process.env.NjE1MjE5NjE0Nzc0NzIyNTgy.XWK2QA.Tjs2C_kE31KfmNkcpbeMuVd-JX4)