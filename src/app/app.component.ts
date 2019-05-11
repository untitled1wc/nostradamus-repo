import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  state:string = 'predict';
  isLoggedIn = false;
  userProfile:any;
  publicPages = ["/register", "/login", "/"];
  notPublicPage;

  constructor(private httpClient :HttpClient, private router: Router) {
    this.router.events.subscribe((val)=>{

      if(val instanceof NavigationStart){
        console.log("NavigationStart", val);
        let profile :any = sessionStorage.getItem("USER_PROFILE");
        if(profile){
          console.log("JSON.parse ", profile);
          this.userProfile = profile = JSON.parse(profile);
          this.isLoggedIn = (profile.authenticationKey) ? true : false;
        }
        (!this.isLoggedIn && this.publicPages.indexOf(val.url) < 0 )?this.router.navigateByUrl('/login') : '';
        
      }

      if(val instanceof NavigationEnd){
        this.state = val.url.replace("/","");
        console.log("NavigationEnd"+this.state);
        this.notPublicPage = (this.publicPages.indexOf(val.url) < 0 );
      }
    });
    

  }

  ngOnInit() {
  
  }

  logoff(){
    sessionStorage.setItem("USER_PROFILE", "");
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }

}
