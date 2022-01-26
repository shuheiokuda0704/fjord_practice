const now  = new Date();
const argv = require('minimist')(process.argv.slice(2));
const year = argv['y'] || now.getFullYear()
const month = argv['m'] || now.getMonth() + 1

function showMonthAndYear() {
    console.log(((month) + '').padStart(6, ' ') + "月 " + year);
}

function showDayOfWeek() {
    console.log('日 月 火 水 木 金 土');
}

function showDays() {
    firstDate = new Date(year, month - 1, 1);
    lastDate = new Date(year, month, 0);

    process.stdout.write(('').padStart(3 * (firstDate.getDay()), ' '));
    
    for(let i = 1; i <= lastDate.getDate(); i++) {
        process.stdout.write((i + '').padStart(2, ' ') + ' ');
        if (new Date(year, month - 1, i).getDay() === 6) { // Saturday
            console.log('');
        }
    }
    console.log('');
}

showMonthAndYear();
showDayOfWeek();
showDays();