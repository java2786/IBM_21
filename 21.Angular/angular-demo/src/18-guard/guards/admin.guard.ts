import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminSellerPageGuard implements CanActivate {
  constructor(private userService:UserService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.userService.user.isValid==true && (this.userService.user.role == 'admin' || this.userService.user.role == 'seller')){
        return true;
      } else {
        this.router.navigate(['home']);
      }
  }
  
}
