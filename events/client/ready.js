const figlet = require('figlet');
const chalk = require('chalk');
const ayarlar = require("../../settings/ayarlar.js")
const { ActivityType } = require("discord.js")

module.exports = async (client) => {
  figlet(client.user.tag, function(err, data) {
    if (err) {
        console.log('hata var kontrol edin (ready)');
        console.dir(err);
        return;
    }
    console.log(chalk.red.bold(data));
  });

  let guilds = client.guilds.cache.size;
  let users = client.users.cache.size;
  let channels = client.channels.cache.size;

  setInterval(() => {
    client.user.setPresence({
      activities: [{ name: ayarlar.DURUM, type: ActivityType.Playing }],
      status: 'dnd',
    })}, 60000)
}


