module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!roll'){
        let random = Math.floor(Math.random() * 100);

        while(random <= 0){
            random = Math.floor(Math.random() * 100);
        }

        msg.reply("You rolled: " + random);

    }
}