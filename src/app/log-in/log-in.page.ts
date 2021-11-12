import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
   


  @ViewChild('username') username;
  @ViewChild('password') password;
   
  


  
  constructor(private router: Router, public alertController: AlertController) { }

  showAlert() {

    this.alertController.create({
      header: 'Error',
      message: 'Usuario o clave incorrectos',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }


  login()  {
    if(this.username.value === localStorage.getItem('username')
      && this.password.value === localStorage.getItem('password'))
    {
      this.router.navigate(['../home-user']);
    } 
    else 
    { 
          this.showAlert()
    }
   }

   

   

  ngOnInit() {
  }


}
