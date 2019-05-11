import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Util } from '../../../services/global/util.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
    openPredictions = [];
    margin:string;

  constructor(private router: Router, private util: Util) { }

  ngOnInit() {
    this.openPredictions = this.util.getOpenPredictions();
    this.margin =  "0 " + (10 * (5- this.openPredictions.length)) ;
    console.log(this.margin);
  }

  predict(matchId){
    
    this.router.navigateByUrl('/predict?match='+ matchId.split(" ")[1]);
  }


}
