const axios = require('axios')

module.exports = async (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!temp'){
        let getTemp = async () => {
            let response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.47&longitude=-80.52&current_weather=true&timezone=auto');
            let temp = response.data;
            return temp
        }

        let tempValue = await getTemp();
      
        let returnValue = tempValue.current_weather;
        console.log(returnValue);
        
        msg.reply("Waterloo's current temperature is: " + returnValue.temperature + "°C\n" + "With windspeed & direction of: " + returnValue.windspeed + " & " + returnValue.winddirection);
        
        
    }
}