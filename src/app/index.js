import '../css/index.css';
import moment from 'moment';
import Time from './Time'

const startDate = {
    year: 2016,
    month: 5,
    day: 13 
}

console.log();

const date = new Time(startDate, moment);

const inYear = document.getElementById('year');
const inMonth = document.getElementById('month');
const inDay = document.getElementById('day');

const time = date.getTimeTogether();
console.log(time);

inYear.textContent = time.years; 
inMonth.textContent = time.months;
inDay.textContent = time.days;
