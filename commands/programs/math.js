const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "math",
  description: "Get information about the math proram!",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(0xa020f0)
      .setTitle("Mathematics")

      .addFields(
        {
          name: "Undergraduate Academic Calendar 2023/2024 for Mathematics:",
          value:
            "https://academic-calendar.wlu.ca/program.php?cal=1&d=2743&p=6161&s=1068&y=87",
        },
        {
          name: "CO-OP Information",
          value:
            "https://www.wlu.ca/information-for/community-members/employers/co-op/programs.html",
        },
        {
          name: "Mathematics (BSc)",
          value: "https://students.wlu.ca/programs/science/mathematics/",
        },
        {
          name: "Program Requirement",
          value:
            "https://students.wlu.ca/programs/science/mathematics/undergraduate-students/program-requirements.html#:~:text=Program%20Regulations%20and%20Notes,-Progression%20into%20Year&text=Graduation%20requires%20a%20minimum%20GPA%20of%205.00%20in%20Mathematics%20and,by%20the%20Faculty%20of%20Science.",
        }
      );

    interaction.reply({ embeds: [embed] });
  },
};
