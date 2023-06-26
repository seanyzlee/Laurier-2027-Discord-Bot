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

        foundMember = memberRoles.map((role) => role.memberCount)
        console.log(foundMember)

      console.log("PASSED");
    }

    const avatarURL = user.displayAvatarURL({ dynamic: true, size: 4096 });
    console.log(avatarURL);

    const exampleEmbed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(user.username)
      .setAuthor({ name: user.username, iconURL: avatarURL, url: avatarURL })
      .setDescription(user.id)
      .setThumbnail(avatarURL)
      .addFields(
        { name: "Laurier Class of 2027", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .addFields({
        name: "Inline field title",
        value: "Some value here",
        inline: true,
      })
      .setImage("https://i.imgur.com/AfFp7pu.png")
      .setTimestamp()
      .setFooter({
        text: "Some footer text here",
        iconURL: "https://i.imgur.com/AfFp7pu.png",
      });

    message.reply({ embeds: [exampleEmbed] });
  }
};
