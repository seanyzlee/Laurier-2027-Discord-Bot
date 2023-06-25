require('dotenv/config')
const { Client, IntentsBitField } = require('discord.js');
const { CommandHandler } = require('djs-commander');
const {stripIndents} = require("common-tags");
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





client.login(process.env.TOKEN)