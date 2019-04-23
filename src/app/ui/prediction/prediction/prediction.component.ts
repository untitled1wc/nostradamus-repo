import { Component, OnInit, ElementRef, Renderer2, ViewChild, SimpleChanges } from '@angular/core';

import { Prediction } from '../../../vo/prediction';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  team1:string = "India";
  team2:string = "Australia";
  prediction: Prediction;
  errorVault = [];
  
  @ViewChild("winMarginWickets") winMarginWickets: ElementRef;
  @ViewChild("winMarginRuns") winMarginRuns: ElementRef;

  constructor( private r2:Renderer2, private httpService: HttpService) {
    
  }

  ngOnInit() {
    this.prediction  = new Prediction();
  }

  handleInputs(x:any){
    this.businessValidate();
    if(this.prediction.winMarginRuns || this.prediction.winMarginWickets){
      this.prediction.winMarginRuns? this.winMarginWickets.nativeElement.setAttribute("disabled", true) : this.winMarginRuns.nativeElement.setAttribute("disabled", "disabled");
    }else{
      this.winMarginRuns.nativeElement.removeAttribute("disabled");
      this.winMarginWickets.nativeElement.removeAttribute("disabled");
    }
    
  }

  toggleMarginFields(){
    if(this.prediction.winner === "ABANDONED" || this.prediction.winner === "TIE"){
      this.prediction.winMarginRuns = undefined;
      this.prediction.winMarginWickets = undefined;
      this.winMarginWickets.nativeElement.setAttribute("disabled", true) ;
      this.winMarginRuns.nativeElement.setAttribute("disabled", true);
    }else{
      this.winMarginRuns.nativeElement.removeAttribute("disabled");
      this.winMarginWickets.nativeElement.removeAttribute("disabled");
    }
  }

  submit(){
    console.log(this.prediction);
    this.businessValidate();
    this.httpService.submitPrediction(this.prediction);
  }
  
  businessValidate(){
    this.errorVault = [];
    if(this.prediction.winMarginRuns && Number.parseInt(this.prediction.winMarginRuns) < 1){
      this.errorVault.push("Win margin should be more than 0 run");
      
    }

    if(this.prediction.winMarginWickets && (Number.parseInt(this.prediction.winMarginWickets) < 1 || Number.parseInt(this.prediction.winMarginWickets) > 10)){
      this.errorVault.push("Win margin should be between 1 to 10 wickets");
    }
  }

}
