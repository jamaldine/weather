import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  authValue:string;
	authStatus:boolean;
  loginValue:string;


  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
    this.authValue=this.authService.isAuthValue;
  	this.authStatus=this.authService.isAuth;
    this.loginValue=this.authService.isLoginValue;
  }
  onSignIn(){
  	this.authService.signOut();

    this.authValue=this.authService.isAuthValue;
  	this.authStatus=this.authService.isAuth;
    this.loginValue=this.authService.isLoginValue;

    this.route.navigate(['']);


  }
  onSignOut(){
  	this.authService.signIn();

    this.authValue=this.authService.isAuthValue;
  	this.authStatus=this.authService.isAuth;
    this.loginValue=this.authService.isLoginValue;

    this.route.navigate(['']);
  }

}
