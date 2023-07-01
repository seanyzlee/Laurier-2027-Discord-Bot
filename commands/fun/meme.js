const axios = require("axios");

module.exports = {
  name: "cpmeme",
  description: "Get a random programming meme from the internet",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
//   deleted: true,

  callback: async (client, interaction) => {


    if (interaction.user.bot) {
      return;
    }

    const options = {
        method: 'GET',
        url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
        headers: {
          'X-RapidAPI-Key': '7c326d32b2msh92084d34957c588p11d06djsn9a99d25cf813',
          'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
          let result = response.data;
          let returnResult = result.map((obj) => obj.image);
          interaction.reply(returnResult[0]);
        
      } catch (error) {
          console.error(error);
      }

    

},
}
