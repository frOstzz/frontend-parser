const { Telegraf } = require('telegraf')

const bot = new Telegraf('1386576345:AAEWUF8Q9S19oSv2klfGremmv2h0Z4DocIw')
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()