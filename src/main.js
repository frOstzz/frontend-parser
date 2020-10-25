import apiService from "./apiService";
import constants from "./constants";
import moment from "moment";
import hoursToMilliseconds from "./numberUtils";

const { Telegraf } = require('telegraf');
const bot = new Telegraf('1386576345:AAEWUF8Q9S19oSv2klfGremmv2h0Z4DocIw');

let isSent = false;

setInterval(() => {
  apiService.get(`${constants.METHODS.GET_WALL}?owner_id=${constants.PARAMETERS.APP_ID}&access_token=${constants.TOKEN}&v=5.124`).then(response => {
    let dateNow = new Date().toISOString();
    const formatted = moment.unix(response.data.response.items[1].date).toISOString();

    isSent = hoursToMilliseconds(moment(dateNow).diff(formatted)) > hoursToMilliseconds(1) && isSent;

    if (moment(dateNow).diff(formatted) < hoursToMilliseconds(1) && !isSent) {
      isSent = true;
      bot.telegram.sendMessage('694588834', response.data.response.items[1].text).then(r => {
        console.log(r);
      });
    }
  })
}, 60000)

bot.launch();