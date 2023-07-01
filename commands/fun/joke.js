const axios = require("axios");

module.exports = {
  name: "joke",
  description: "Get a random joke from the internet",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: true,

  callback: async (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    let getJoke = async () => {
      let response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      let joke = response.data;
      return joke;
    };

    let jokeValue = await getJoke();

    interaction.reply(jokeValue.setup + "\n..." + jokeValue.punchline);
  },
};
