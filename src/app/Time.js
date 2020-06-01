export default class Time{
    constructor(date, moment){
        this.moment = moment;        
        this.startDate = this.moment([date.year, date.month, date.day]);        
        this.currentDate = this.moment([this.moment().year(), this.moment().month() + 1, (this.moment().date() == 31)? 30 : this.moment().date()]);        
        this.dateAnniversary = this.moment([this.moment().year(), this.moment().month() + 1, date.day ]);                        
    }
 
     getTimeTogether(){
        const totalMonths =  this.currentDate.diff(this.startDate, 'months');
        const years = parseInt(totalMonths / 12);
        const months = totalMonths % 12;
        const days = (this.moment().date() == 31)? this.currentDate.diff(this.dateAnniversary, 'days') + 1: this.currentDate.diff(this.dateAnniversary, 'days');                
        
        return{
            years: years,
            months: months,
            days: days
        }
    }

}