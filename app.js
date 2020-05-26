const Discord = require("discord.js");
const config  = require("./config.json");
const bot     = new Discord.Client();

function react_to_msg(msg, emojis) {
	for(i in emojis) {
		msg.react(emojis[i]);
	}
}

bot.on("ready", function() {
	console.log("Ready!");
});
 
bot.on("message", (msg) => {
	for(i in config.users) {
		const user = config.users[i];
		
		if(msg.author.id == user.id) {
			if(!user.channels) {
				react_to_msg(msg, user.emojis);
			}
			else if(user.channels.includes(msg.channel.id)) {
				react_to_msg(msg, user.emojis);
			}
		}
	}
});

bot.login(config.token);

