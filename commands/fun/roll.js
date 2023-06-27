module.exports = {
  name: "roll",
  description: "Roll a random number between 1-100",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: (client, interaction) => {
    let random = Math.floor(Math.random() * 100);

    while (random <= 0) {
      random = Math.floor(Math.random() * 100);
    }

    interaction.reply("You rolled: " + random);
  },
};
