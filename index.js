require("dotenv/config");
const { Client, IntentsBitField, ActivityType } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
  ],
});

eventHandler(client);

client.on("ready", (c) => {
  console.log(`${c.user.tag} is online`);
  client.user.setActivity({
    name: "Use /help",
    type: ActivityType.Playing,
  });
});

client.on("messageCreate", (message) => {
  var role = message.member.guild.roles.cache.find(
    (role) => role.name == "Hack the North 2023"
  );
  if (message.content == "!htn") {
    if (!message.member.roles.cache.has("1125118158680887439")) {
      message.member.roles.add(role);
      console.log("added role");
      message.reply("Sucessfully given you the role!");
    } else {
      message.member.roles.remove("1125118158680887439");
      message.reply("Removed the role!")
    }
  }
});

client.login(process.env.TOKEN);
