const axios = require("axios");
const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");

module.exports = {
  callback: async (client, interaction) => {
    if (interaction.user.bot) {
      return;
    }

    const targetTermId = interaction.options.get("target-term").value;
    let titles, responseData, urls;
    console.log(targetTermId);

    const options = {
      method: "GET",
      url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
      params: {
        q: targetTermId,
        pageNumber: "1",
        pageSize: "10",
        autoCorrect: "true",
      },
      headers: {
        "X-RapidAPI-Key": "7c326d32b2msh92084d34957c588p11d06djsn9a99d25cf813",
        "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      responseData = response.data.value;
      titles = responseData.map((obj) => obj.title);
      urls = responseData.map((obj) => obj.webpageUrl);
    } catch (error) {
      console.error(error);
    }

    const embed = new EmbedBuilder()
      .setColor(0xa020f0)
      .setTitle("Search Results:")

      .addFields(
        {
          name: titles[0],
          value: urls[0],
        },
        {
          name: titles[1],
          value: urls[1],
        },
        {
          name: titles[2],
          value: urls[2],
        },
        {
          name: titles[3],
          value: urls[3],
        },
        {
          name: titles[4],
          value: urls[4],
        },
        {
          name: titles[5],
          value: urls[5],
        }
      );
    interaction.reply({ embeds: [embed] });
  },

  name: "search",
  description: "Retrieve information from the web",
  options: [
    {
      name: "target-term",
      description: "The info you want to get.",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
};
