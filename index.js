const Discord = require('discord.js') 
const config = require('./config.json');
const client = new Discord.Client({intents: 32767});
const discordModals = require('discord-modals');
console.clear()


discordModals(client)
module.exports = client
client.commands = new Discord.Collection();
require("./handler")(client)

client.login(config.token)