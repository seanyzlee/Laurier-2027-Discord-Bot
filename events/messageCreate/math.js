const { EmbedBuilder } = require("discord.js");
 
 module.exports = (msg) => {
    if(msg.author.bot){
        return;
    }
    if(msg.content.toLowerCase() === '!math'){
        const embed = new EmbedBuilder()
      .setColor(0xA020F0)
      .setTitle("Mathematics")
    
      .addFields(
    
        { name: "Undergraduate Academic Calendar 2023/2024 for Mathematics:", value: "https://academic-calendar.wlu.ca/program.php?cal=1&d=2743&p=6161&s=1068&y=87" },
        { name: "CO-OP Information", value: "https://www.wlu.ca/information-for/community-members/employers/co-op/programs.html"},
        { name: "Mathematics (BSc)", value: "https://students.wlu.ca/programs/science/mathematics/"},
        { name: "Program Requirement", value: "https://students.wlu.ca/programs/science/mathematics/undergraduate-students/program-requirements.html#:~:text=Program%20Regulations%20and%20Notes,-Progression%20into%20Year&text=Graduation%20requires%20a%20minimum%20GPA%20of%205.00%20in%20Mathematics%20and,by%20the%20Faculty%20of%20Science."},
        
      )
   
    msg.reply({ embeds: [embed] });
  }
};
    
