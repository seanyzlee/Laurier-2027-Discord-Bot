const axios = require('axios')

module.exports = async (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!joke'){
        let getJoke = async () => {
            let response = await axios.get('https://official-joke-api.appspot.com/random_joke');
            let joke = response.data;
            return joke
        }

        let jokeValue = await getJoke();
        console.log(jokeValue);
        
        msg.reply(jokeValue.setup + "\n..." + jokeValue.punchline)
    }
}