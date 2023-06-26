const { EmbedBuilder } = require("discord.js");
 
 module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!data'){
        const embed = new EmbedBuilder()
      .setColor(0xf4444)
      .setTitle("Data Science")
    
      .addFields(
    
        { name: "Undergraduate Academic Calendar 2023/2024 for Data Science:", value: "https://academic-calendar.wlu.ca/program.php?cal=1&d=2589&p=5763&s=1034&y=85" },
        { name: "CO-OP Information", value: "https://students.wlu.ca/work-leadership-and-volunteering/co-op/programs/science.html"},
        { name: "Data Science (DS)", value: "https://www.wlu.ca/programs/science/undergraduate/data-science-bsc/index.html"}
        
      )
   
    msg.reply({ embeds: [embed] });
  }
};
    
