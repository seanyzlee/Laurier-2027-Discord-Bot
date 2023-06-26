const axios = require('axios')

module.exports = async (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!rizz'){
        let getRizz = async () => {
            let response = await axios.get('https://vinuxd.vercel.app/api/pickup');
            let rizz = response.data;
            return rizz
        }

        let rizzValue = await getRizz();
      
        let returnValue = rizzValue.pickup
        
        msg.reply(returnValue);

        
        

        
        
    }
}