client.commands = new Discord.Collection();
const fs = require('fs');
const prefix = "/";



fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./Commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./Events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});



client.on('ready',() => {
    client.user.setActivity("/music", { type: "PLAYING"});
    console.log("Je suis de nouveau connecté !");
  });
  
  client.login("NjI1MDcxMDgwOTM1MTI5MTA4.XYaXkw.lRx9qJMnswNjo6NKveHJpK4JNxo");
