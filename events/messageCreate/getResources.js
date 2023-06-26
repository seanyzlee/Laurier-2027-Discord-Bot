const { EmbedBuilder } = require("discord.js");
const Discord = require("discord.js");

module.exports = (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content.toLowerCase().includes("!get")) {
    let user = {};
    let memberRoles = message.member.roles.cache;
    let foundMember;

    if (message.mentions.users.first() == undefined) {
      user = message.author;



      console.log("PASSED");
    } else if (typeof message.mentions.users.first() != undefined) {
      user = message.mentions.users.first();
      const tempUser = message.mentions.members.first();
      
      memberRoles = tempUser.roles.cache;

      console.log(memberRoles.map((role) => role.name))
          

      console.log("PASSED");
    }

    const avatarURL = user.displayAvatarURL({ dynamic: true, size: 4096 });
    foundMember = memberRoles.map((role) => role.name )
    foundMember.pop();
  
    const listAsString = foundMember.join(', ');
    console.log(avatarURL);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(user.username)
      .setAuthor({ name: user.username, iconURL: avatarURL, url: avatarURL })
      .setDescription(user.id)
      .setThumbnail(avatarURL)
      .addFields(
        { name: "Laurier Class of 2027", value: "Current Roles in the Server: \n" + listAsString },
        { name: "\u200B", value: "\u200B" },
       
      )
     
      .setImage(avatarURL)
      .setTimestamp()
      .setFooter({
        text: "User's Avatar",
        iconURL: avatarURL,
      });

    message.reply({ embeds: [embed] });
  }
};
