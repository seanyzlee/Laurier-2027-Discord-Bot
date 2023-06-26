require('dotenv/config')
const { Client, IntentsBitField, ActivityType } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const path = require('path');

const client = new Client({
    intents:[
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
    ],
});

new CommandHandler({
    client,
    eventsPath: path.join(__dirname, 'events'),
    commandsPath: path.join(__dirname,'commands')
})

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online`)
    client.user.setActivity({
        name: "Use !help",
        type: ActivityType.Watching,
    });

})



client.login(process.env.TOKEN)