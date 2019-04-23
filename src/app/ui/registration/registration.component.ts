import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {UserDetails} from '../../vo/user-details';
import {DataHandlerService} from '../../services/global/data-handler.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private userDetails:UserDetails;

  roles=["Batsman","Bowler","All Rounder","Batsman (WK)"];

  constructor(private dataHandlerService: DataHandlerService, private router: Router) { }

  ngOnInit() {
    this.userDetails = new UserDetails();
  }

  register(){
    if(this.userDetails.fullName){
      this.dataHandlerService.addPlayer(this.userDetails);
      this.userDetails = new UserDetails();
    }else{

    }
  }

  delete(userDetails){
    var dec = confirm('Do you want to delete '+userDetails.fullName+"?");
    if(dec){
      this.dataHandlerService.delete(userDetails);
    }
  }

  login(userDetails){
      this.dataHandlerService.loginPlayer(userDetails);
      this.router.navigateByUrl('/login');
  }

  clearAll(){
    this.dataHandlerService.clearAll();
  }
  toString(){
    return JSON.stringify(this.userDetails);
  }

  showPlayer(userDetails){
    return (userDetails.id+" | "+
      userDetails.fullName+" ("+userDetails.age+") | "+
      userDetails.role+" | "+
      userDetails.mobile+" | "+
      userDetails.email+" | ");
  }

  getPlayers(){
    return this.dataHandlerService.getPlayers();
  }

}
