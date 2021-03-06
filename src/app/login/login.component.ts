import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData =<any>{}

  constructor(private _auth:AuthService,private _router:Router) { }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res),
        localStorage.setItem('token',res.token)
        this._router.navigate(['/add'])
      },
      err => console.log(err)
    )

  }
  ngOnInit(): void {
  }

}
