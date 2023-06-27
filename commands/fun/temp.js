const axios = require("axios");

module.exports = {
  name: "temp",
  description: "Get current temperature and windspeed at Waterloo",
  // devOnly: Boolean,
  testOnly: true,
  // options: Object[],
  // deleted: Boolean,

  callback: async (client, interaction) => {
    let getTemp = async () => {
      let response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=43.47&longitude=-80.52&current_weather=true&timezone=auto"
      );
      let temp = response.data;
      return temp;
    };

    let tempValue = await getTemp();

    let returnValue = tempValue.current_weather;
    console.log(returnValue);
    interaction.reply("Waterloo's current temperature is: " + returnValue.temperature + "°C\n" + "With windspeed & direction of: " + returnValue.windspeed + " & " + returnValue.winddirection);
  },
};
