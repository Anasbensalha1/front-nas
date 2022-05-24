import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from '../service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  identifiant : string ="";
  motdepasse : string ="";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  login(f: NgForm) {
    this.authService.login(f.value).subscribe((result: any) => {
      if (result === null) {
        alert('wrong credentials');
        return ;
      }
      console.log(result);
      localStorage.setItem("cn", result.cn);
      localStorage.setItem("sn", result.sn);
      localStorage.setItem("mail", result.mail);
      this.router.navigate(['/sidebar']);
    })
    return false;
  }


}
