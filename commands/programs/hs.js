const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "hs",
  description: "Get information about the health science program!",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(0xfff11)
      .setTitle("Health Science")

      .addFields(
        {
          name: "Undergraduate Academic Calendar 2023/2024 for Health Science:",
          value:
            "https://academic-calendar.wlu.ca/program.php?cal=1&d=2750&p=6181&s=1068&y=87",
        },
        {
          name: "CO-OP Information",
          value:
            "https://students.wlu.ca/work-leadership-and-volunteering/co-op/programs/science.html",
        },
        {
          name: "Health Science (HS)",
          value:
            "https://www.wlu.ca/programs/science/undergraduate/health-sciences-bsc/index.html",
        }
      );

    interaction.reply({ embeds: [embed] });
  },
};
