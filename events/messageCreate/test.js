module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!ping'){
        msg.reply("Pong")
    }
}