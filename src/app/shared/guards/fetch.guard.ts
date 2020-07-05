import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AboutService } from 'src/app/about/services/about.service';
import { map } from 'rxjs/operators';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class FetchGuard implements Resolve<Team> {

  constructor(private aboutService: AboutService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.aboutService.getTeamData().pipe(map((res) => {
      if (res) {
        return res;
      } else {
        this.router.navigate(['/about/contact']);
        return null;
      }
    }, err => {
      this.router.navigate(['/about/contact']);
      return null;
    }))
  }
}
