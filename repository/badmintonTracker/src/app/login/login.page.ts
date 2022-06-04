import { Component,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthenticationService } from "../shared/authentication-service";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userId:string;
  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}
  ngOnInit() {
  }
  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        if(this.authService.isEmailVerified) {
          const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            this.userId = user.uid;
          });
          this.router.navigate(['tabs']);          
        }
        else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}