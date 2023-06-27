# Laurier-2027-Discord-Bot

**A discord bot developed for the Laurier Class of '27 Discord, a community with over 200 + members.**

Developed and built by: Sean Lee

QA by: Amun Ahmad

Contributed by: Amun Ahmad

**How to contribute**

**The technology and modules that were used to develop this bot are:**
Javascript
Axios
Discord-js
Flask

Please make sure that you've read the documentation or watched a video on topics you do not understand before submitting a pull request.

Index.js boots the bot up and sets its presence, it also ensures that commander-js is connected to the respective folders to read the js scripts within the folders
The events folder includes text commands and the bootup message script
The commands folder includes / commands (will be integrating text commands to / commands soon)

**The others (Axios and Flask) are modules that help with API calls and keep the bot alive (hosted on Replit) respectively.**

.gitignores ignores node-modules and .env

**Node.JS Installation Guide**
https://scribehow.com/shared/How_to_Download_Nodejs_on_Windows__uwUb1AK1TX2YKNKVwA5jyQ

**To start contributing slash commands,**

_Reference existing messageCreate scripts first._

**Start by writing**
```
module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: Boolean,
    testOnly: true,
    // options: Object[],
    // deleted: Boolean,
  
    callback: (client, interaction) => {
      interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
  };
```
Then change as you please
