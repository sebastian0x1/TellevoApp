import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('username')username
  @ViewChild('mail')mail
  @ViewChild('password')password
  

  ngOnInit() {
  }



  signup(){
    localStorage.setItem('username', this.username.value)
    localStorage.setItem('mail', this.mail.value)
    localStorage.setItem('password', this.password.value)
    this.router.navigate(['../home-user']);
    
  }

}
