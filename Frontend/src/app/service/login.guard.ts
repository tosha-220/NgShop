import {RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {CategoriesService} from "./category.service";
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private categoriesService: CategoriesService, private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.categoriesService.isLoggin()) {
      this.router.navigate(["/home"]);
      return false;
    } else {
      return true;
    }
  }
}
