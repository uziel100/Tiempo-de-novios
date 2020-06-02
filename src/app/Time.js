export default class Time{
    constructor(date, moment){
        this.day = date.day;
        this.moment = moment;        
        this.startDate = this.moment([date.year, date.month - 1, this.day]);        
        this.currentDate = this.moment([this.moment().year(), this.moment().month(),  this.moment().date() ]);        
    }
 
     getTimeTogether(){
        const totalMonths =  this.currentDate.diff(this.startDate, 'months');
        const years = parseInt(totalMonths / 12);
        const months = totalMonths % 12;
        const days = this.getDays();
     
        return{
            years: years,
            months: months,
            days: days
        }
    }

    getDays(){
        let totalDias = 0;        
        const aniversarioPorMes = this.moment([this.moment().year(), this.moment().month(), this.day]);
        const aniversarioMesAnterior = this.moment([this.moment().year(), this.moment().month() - 1, this.day]);

        totalDias = (this.currentDate < aniversarioPorMes)? this.currentDate.diff(aniversarioMesAnterior, 'days') : this.currentDate.diff(aniversarioPorMes, 'days');        
             
        return totalDias;
    }

}