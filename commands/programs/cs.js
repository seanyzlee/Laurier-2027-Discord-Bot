const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "cs",
  description: "Get information about the CS proram!",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(0xfffff)
      .setTitle("Computer Science")

      .addFields(
        {
          name: "Undergraduate Academic Calendar 2023/2024 for Computer Science:",
          value:
            "https://academic-calendar.wlu.ca/program.php?cal=1&d=2741&p=6147&s=1068&y=87 ",
        },
        {
          name: "How to get CO-OP after first-year",
          value:
            "https://www.reddit.com/r/wlu/comments/eqqnbn/how_to_get_into_cs_coop_my_observations_as_a_new/?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=share_button",
        },
        {
          name: "Computer Science (BSc)",
          value:
            "https://www.wlu.ca/programs/science/undergraduate/computer-science-bsc/index.html",
        },
        {
          name: "Computer Science (BA in combination)",
          value:
            "https://www.wlu.ca/programs/science/undergraduate/computer-science-ba/index.html",
        },
        {
          name: "MA103's Textbook",
          value:
            "https://cdn.discordapp.com/attachments/1110338983650676846/1112235914404581467/Mock-Ma103-Fin-F19.pdf",
        },
        {
          name: "MA102's Textbook",
          value:
            "https://drive.google.com/file/d/1VRMF2fHfOa9RWcYk-cUkPGNGxPCG8S2d/view?usp=sharing",
        },
        { name: "CP104's Notes", value: "https://bohr.wlu.ca/cp104/notes/" },
        {
          name: "CP164's Notes",
          value: "https://github.com/AliAhmed2004/CP164",
        },
        {
          name: "How to get girls",
          value: "https://www.youtube.com/shorts/VXhRr4vl6iM",
        }
      );

    interaction.reply({ embeds: [embed] });
  },
};
