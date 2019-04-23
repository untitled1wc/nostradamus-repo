import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //activeClass="active";
  state:string = 'predict';
  isLoggedIn = true;
  constructor(private httpClient :HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((val)=>{
      if(val instanceof NavigationEnd){
        this.state = val.url.replace("/","");
        console.log("xxxxx"+this.state);
        this.isLoggedIn = this.state == "register" || this.state == "login" ?false:true;
      }
    });
    
  }

}
