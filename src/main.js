import apiService from "./apiService";
import constants from "./constants";

const { Telegraf } = require('telegraf');
const bot = new Telegraf('1386576345:AAEWUF8Q9S19oSv2klfGremmv2h0Z4DocIw');

apiService.get(`${constants.METHODS.GET_WALL}?owner_id=${constants.PARAMETERS.APP_ID}&access_token=${constants.TOKEN}&v=5.124`).then(response => {
  return response.data.response.items[1]
})

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();