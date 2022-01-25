const now  = new Date();
const argv = require('minimist')(process.argv.slice(2));
const year = argv['y'] || now.getFullYear()
const month = argv['m'] || now.getMonth() + 1

function show_month_and_year() {
    console.log((month + '').padStart(6, ' ') + "月 " + year);
}

function show_day_of_week() {
    console.log('日 月 火 水 木 金 土');
}

show_month_and_year()
show_day_of_week()