import { Component,OnInit } from '@angular/core';

import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title="home";
  authValue="";
  authStatus:boolean;

	constructor(private authService: AuthService){}
  	ngOnInit(){
  		//this.weathers = this.meteoService.api_weathers;private meteoService : MeteoService, import { MeteoService } from './services/meteo.service';
      this.authValue=this.authService.isAuthValue;
      this.authStatus=this.authService.isAuth;
  	}

  	weathers:any[];

    onAuthValueOn(){
      this.authService.signOut();
      this.authValue=this.authService.isAuthValue;
      this.authStatus=this.authService.isAuth;
    }
    onAuthValueOff(){
      this.authService.signIn();
      this.authValue=this.authService.isAuthValue;
      this.authStatus=this.authService.isAuth;
    }

}