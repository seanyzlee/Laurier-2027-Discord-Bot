const { EmbedBuilder } = require("discord.js");
 
 module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!help'){
        const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle("The Help Panel")
    
      .addFields(
    
        { name: "!getinfo", value: "Return information about yourself or someone else" },
        { name: "!cs", value: "Retrieve important information about computer science"},
        { name: "!bba", value: "Retrieve important information about BBA"},
        { name: "!data", value: "Retrieve important information about data science"},
        { name: "!health", value: "Retrieve important information about health science"},
        { name: "!joke", value: "Get a random joke from the internet"},
        { name: "!cat", value: "Get a cute image of a cat from the internet"},
        { name: "!roll", value: "Roll a random value from 1-100"},
        { name: "!faq", value: "Display a list of frequently asked questions"},
        { name: "!ping", value: "Test if bot is working"}
        
      )
   
    msg.reply({ embeds: [embed] });
  }
};
    
