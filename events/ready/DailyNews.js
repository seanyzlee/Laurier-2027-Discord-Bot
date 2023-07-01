const CronJob = require("cron").CronJob;
const axios = require("axios");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client) => {
  const channel = client.channels.cache.get("1124543943904858223");

  let getNews = async () => {
    let response = await axios.get(
      "https://newsdata.io/api/1/news?apikey=pub_25471c9ee48aa5873d002fe80808fe434c996&q=waterloo&country=ca&language=en"
    );
    let news = response.data;
    return news;
  };

  let newsValue = await getNews();
  let returnValues = newsValue.results;
  let mappedTitleValues = returnValues.map((obj) => obj.title);
  let mappedURLValues = returnValues.map((obj) => obj.link);

  var job = new CronJob(
    "0 7 * * *",
    function () {
      const embed = new EmbedBuilder()
        .setColor(0xfffff)
        .setTitle("Daily Waterloo News")
        .setImage("https://i.pinimg.com/originals/aa/53/e9/aa53e9e412bb82cf3bcfa66fa319bc70.jpg")
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
