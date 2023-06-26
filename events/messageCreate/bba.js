const { EmbedBuilder } = require("discord.js");
 
 module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!bba'){
        const embed = new EmbedBuilder()
      .setColor(0xA020F0)
      .setTitle("Business Administration")
    
      .addFields(
    
        { name: "Undergraduate Academic Calendar 2023/2024 for Business Administration:", value: "https://academic-calendar.wlu.ca/program.php?cal=1&d=2782&p=6254&s=1070&y=87" },
        { name: "CO-OP Information", value: "https://www.wlu.ca/programs/assets/resources/business-co-op.html"},
        { name: "Business Administration (BBA)", value: "https://www.wlu.ca/programs/business-and-economics/undergraduate/business-administration-bba/index.html"},
        { name: "Program Requirement", value: "https://students.wlu.ca/programs/lazaridis-school/business/undergraduate-programs/program-requirements.html"},
        { name: "Do you have to wear a suit to lectures every day?", value: "Yes. /s"}
        
      )
   
    msg.reply({ embeds: [embed] });
  }
};
    
