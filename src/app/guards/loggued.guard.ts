import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogguedGuard implements CanActivate {
  constructor(private router: Router){
         
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
     {
    
    if(!localStorage.getItem('username')){
      this.router.navigate(['../home'])
    }
    
    return true;

    
  }
  
}
