const CronJob = require("cron").CronJob;
const axios = require("axios");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client) => {
  const channel = client.channels.cache.get("1110304592404676740");

  let getNews = async () => {
    let response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=ca&apiKey=8ed2b84f7d0c4e47b5df65dbd7e4be8e"
    );
    let news = response.data;
    return news;
  };

  let newsValue = await getNews();
  let returnValues = newsValue.articles;
  let mappedTitleValues = returnValues.map((obj) => obj.title);
  let mappedURLValues = returnValues.map((obj) => obj.url);

  var job = new CronJob(
    "* * 1 * * *",
    function () {
      const embed = new EmbedBuilder()
        .setColor(0xfffff)
        .setTitle("Daily Tech News")

        .addFields(
          {
            name: mappedTitleValues[0],
            value: mappedURLValues[0],
          },
          {
            name: mappedTitleValues[1],
            value: mappedURLValues[1],
          },
          {
            name: mappedTitleValues[2],
            value: mappedURLValues[2],
          }
        );

      channel.send({ embeds: [embed] });
    },

    null,
    true,
    "America/Los_Angeles"
  );
  job.start();
};
