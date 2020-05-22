export class AuthService {
	isAuth=false;
	isAuthValue="SIGN IN";
	isLoginValue="Login";

	signIn(){
		this.isAuth=false;
		this.isAuthValue="SIGN IN";
		this.isLoginValue="Login";
		console.log("isAuthValue= "+this.isAuthValue);
		console.log("isAuth=true!");
	}
	signOut(){
		this.isAuth=true;
		this.isAuthValue="SIGN OUT";
		this.isLoginValue="Logout";
		console.log("isAuthValue= "+this.isAuthValue);
		console.log("isAuth=false!");
	}
}