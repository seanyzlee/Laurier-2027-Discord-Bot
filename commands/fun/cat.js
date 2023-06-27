const axios = require("axios");

module.exports = {
  name: "cat",
  description: "Returns a cute cat image",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: async (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    let getCat = async () => {
      let response = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );
      let cat = response.data;
      return cat;
    };

    let catValue = await getCat();
    let returnValue = catValue.map((obj) => obj.url);

    interaction.reply("Meow~\n" + returnValue.join(""));
  },
};
