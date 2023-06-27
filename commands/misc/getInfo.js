const {
    Client,
    Interaction,
    ApplicationCommandOptionType,
    EmbedBuilder,
  } = require('discord.js');
  
  module.exports = {
    /**
     *
     * @param {Client} client
     * @param {Interaction} interaction
     */
  
    callback: async (client, interaction) => {
      const targetUserId = interaction.options.get('target-user').value;
    
      await interaction.deferReply();
  
      const targetUser = await interaction.guild.members.fetch(targetUserId);
  
      if (!targetUser) {
        await interaction.editReply("That user doesn't exist in this server.");
        return;
      }
  
      const avatarURL = targetUser.displayAvatarURL({ dynamic: true, size: 4096 });
      const targetUserInfo = await interaction.options.get('target-user')
      const guildMember = interaction.guild.members.cache.get(targetUser.id);
      const roles = guildMember.roles.cache.map(role => role.name);
      
      roles.pop();
      console.log(roles);
      const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(targetUserInfo.user.username)
      .setAuthor({ name: targetUserInfo.user.username, iconURL: avatarURL, url: avatarURL })
      .setDescription(targetUserId)
      .setThumbnail(avatarURL)
      .addFields(
        { name: "Laurier Class of 2027", value: "Current Roles in the Server: \n " +  roles},
        { name: "\u200B", value: "\u200B" },
       
      )
     
      .setImage(avatarURL)
      .setTimestamp()
      .setFooter({
        text: "User's Avatar",
        iconURL: avatarURL,
      });

      interaction.editReply({embeds: [embed]});
  
      
    },
  
    name: 'get',
    description: 'Retrieve information about a user',
    options: [
      {
        name: 'target-user',
        description: 'The user you want to get.',
        type: ApplicationCommandOptionType.Mentionable,
        required: true,
      },

    
      
    ],

  };