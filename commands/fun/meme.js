const axios = require("axios");

module.exports = {
  name: "meme",
  description: "Get a random meme from the internet",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: true,

  callback: async (client, interaction) => {


    if (interaction.user.bot) {
      return;
    }

    const options = {
        method: 'GET',
        url: 'https://memes9.p.rapidapi.com/api/random',
        params: {
          genre: 'memes',
          type: 'top'
        },
        headers: {
          'X-RapidAPI-Key': '7c326d32b2msh92084d34957c588p11d06djsn9a99d25cf813',
          'X-RapidAPI-Host': 'memes9.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          let result = response.data;
          interaction.reply(result.title + "\n" + result.url);

      } catch (error) {
          interaction.reply("Out for today, no more API calls :(");
          console.error(error);
      }

    

},
}
