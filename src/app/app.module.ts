import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './ui/registration/registration.component';
import { ScheduleComponent } from './ui/schedule/schedule.component';
import { LoginComponent } from './ui/login/login/login.component';
import { PredictionComponent } from './ui/prediction/prediction/prediction.component';
import { LeaderBoardComponent } from './ui/leader-board/leader-board/leader-board.component';
import { ResultsComponent } from './ui/results/results/results.component';
import { ProfileComponent } from './ui/profile/profile/profile.component';
import { ShowcaseComponent } from './ui/showcase/showcase/showcase.component';
import { RulesComponent } from './ui/rules/rules.component';

/*modal objects*/
import { UserDetails } from './vo/user-details';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { HttpService } from './services/http/http.service';

const routes: Routes = [
  {path: '', component: ShowcaseComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'predict', component: PredictionComponent},
  {path: 'leader-board', component: LeaderBoardComponent},
  {path: 'results', component: ResultsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'showcase', component: ShowcaseComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'rules', component: RulesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    ScheduleComponent,
    LoginComponent,
    PredictionComponent,
    LeaderBoardComponent,
    ResultsComponent,
    ProfileComponent,
    ShowcaseComponent,
    NumberOnlyDirective,
    RulesComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {useHash:false}),
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule,
    UserDetails, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
