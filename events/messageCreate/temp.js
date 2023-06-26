const axios = require('axios')

module.exports = async (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!temp'){
        let getTemp = async () => {
            let response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=43.70&longitude=-79.42&current_weather=true&timezone=auto');
            let temp = response.data;
            return temp
        }

        let tempValue = await getTemp();
      
        let returnValue = tempValue.current_weather;
        console.log(returnValue);
        
        msg.reply("Toronto's current temperature is: " + returnValue.temperature + "°C\n" + "With windspeed & direction of: " + returnValue.windspeed + " & " + returnValue.winddirection);
        
        
    }
}