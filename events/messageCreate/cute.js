const axios = require('axios')

module.exports = async (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!cute'){
        let getCute = async () => {
            let response = await axios.get('https://api.thecatapi.com/v1/images/search');
            let cute = response.data;
            return cute
        }

        let cuteValue = await getCute();
        let returnValue = cuteValue.map(obj => obj.url)
        
        msg.reply("Meow~\n" + returnValue.join(''));
        
        
    }
}