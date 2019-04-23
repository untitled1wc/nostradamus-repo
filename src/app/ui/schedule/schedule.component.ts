import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  ranks: any;
  scheduleList: any;
  constructor(private httpClient :HttpClient) {
    
  }

  ngOnInit() {
  }

  
  call(){
	  this.httpClient.get("http://localhost:8080/predict/ranklist").subscribe((response)=>{
      console.log(response);
      this.ranks = response;
    });
  }

  schedule(){
	  this.httpClient.get("http://localhost:8080/predict/schedule").subscribe((response)=>{
      console.log(response);
      this.scheduleList = response;
    });
  }

}
