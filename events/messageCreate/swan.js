module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase().includes('swan')){
        msg.reply("https://imgur.com/t/swan/AgGUFcv")
    }
}