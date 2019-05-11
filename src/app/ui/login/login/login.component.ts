import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.httpService.login().subscribe(usrProfile =>{
      console.log("USER_PROFILE", usrProfile);
      sessionStorage.setItem("USER_PROFILE", JSON.stringify(usrProfile));
      if(usrProfile.isadmin){
        //  redirect to admin results page
      }else{
        this.router.navigateByUrl('/predict');
      }
    });
  }

}
