const { EmbedBuilder } = require("discord.js");
 
 module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!faq'){
        const embed = new EmbedBuilder()
      .setColor(0xfff11)
      .setTitle("Health Science")
    
      .addFields(
    
        { name: `"Is Laurier better than ___ in CS?"`, value: "Assuming that you don't get into prestige universities like UFT or Waterloo, it really doesn't matter where you go after that, they are generally on the same tier." },
        { name: `"What are some co-op opportunities offered at Laurier?"`, value: "Use the commands for your respective programs for more information!"},
        { name: `"What are some easy electives to take in first year?"`, value: "Bird courses: https://docs.google.com/spreadsheets/d/1atGF0uJHqJI60ocBtfDy_TJH4xjkRkVZ72vJm7tJ8rs/edit#gid=0"},
        { name: `"Is [prof's name] easy?"`, value: "You can definitely ask in #general for more information of the prof! You can also use ratemyprof to lookup the prof's name for reviews by other students that have taken them before!"},
        { name: `"General tips for first-year?"`, value: "Have fun! Don't take too many spread out courses! Meet new people by going to orientation week's party! Hang out a lot but don't forget to study!"},
        { name: `"When do I get to know about [things about residenec]"`, value: "Mid-Late July"},
        
      )
   
    msg.reply({ embeds: [embed] });
  }
};
    
