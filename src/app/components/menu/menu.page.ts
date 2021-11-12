import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router) { }


  username = localStorage.getItem('username')
  password = localStorage.getItem('password')
  mail = localStorage.getItem('mail')

  ngOnInit() {
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['../home'])
  }
}
