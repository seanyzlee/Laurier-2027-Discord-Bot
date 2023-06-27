const axios = require("axios");

module.exports = {
  name: "rizz",
  description: "The Ultimate Rizzler",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: async (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    let getRizz = async () => {
      let response = await axios.get("https://vinuxd.vercel.app/api/pickup");
      let rizz = response.data;
      return rizz;
    };

    let rizzValue = await getRizz();

    let returnValue = rizzValue.pickup;
    interaction.reply(returnValue);
  },
};
