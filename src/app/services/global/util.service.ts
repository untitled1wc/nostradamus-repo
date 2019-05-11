import { Injectable } from '@angular/core';
//import * as moment from 'moment';
import { fullSchedule } from '../../static/schedule-list';

@Injectable({
  providedIn: 'root'
})
export class Util {
  
    getOpenPredictions(){
        let openPredictions = [];
        fullSchedule.filter(entry =>{
            //new Date("3 march 2015 20:21:44"); // Jul 06 2019 5:00 PM // Jul 06, Sat
            //entry.matchDate.split(",")[0]//
            //let today: Date = new Date();
            let today: Date = new Date("May 30 2019 2:00 PM");
            let matchDate: Date = new Date(entry.matchDate.split(",")[0] +" 2019 "+ entry.matchTime);
            let diffInMs : number = (matchDate.getTime() - today.getTime());
            let diffInHours: number = diffInMs / 1000 / 60 / 60;

            if(diffInHours >2 && diffInHours <= 72){
                console.log("match->", entry);
                openPredictions.push(entry);
            }
        });
        return openPredictions;
    }
}
