const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "help",
  description: "Get available commadns on the server",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("The Help Panel")

      .addFields(
        {
          name: "/get",
          value: "Return information about yourself or someone else",
        },
        {
          name: "/cs",
          value: "Retrieve important information about computer science",
        },
        { name: "/bba", value: "Retrieve important information about BBA" },
        {
          name: "/ds",
          value: "Retrieve important information about data science",
        },
        {
          name: "/hs",
          value: "Retrieve important information about health science",
        },
        { name: "/math", value: "Retrieve important information about math" },
        { name: "/joke", value: "Get a random joke from the internet" },
        { name: "/cat", value: "Get a cute image of a cat from the internet" },
        { name: "/temp", value: "Get current temperature at Waterloo" },
        { name: "/rizz", value: "The Ultimate Rizzler" },
        { name: "/roll", value: "Roll a random value from 1-100" },
        { name: "/search", value: "Search up something (no NSFW or angry)" },
        { name: "/meme", value: "Get a random meme from reddit" },
        { name: "/faq", value: "Display a list of frequently asked questions" },
        { name: "/ping", value: "Test if bot is working" }
      );

    interaction.reply({ embeds: [embed] });
  },
};
