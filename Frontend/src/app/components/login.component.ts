import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {LoginService} from "../service/login.service";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(private router: Router,
              private loginService: LoginService,
              private location: Location) {
  }

  model: any = {};
  incorrectLogin: boolean;

  login() {
    this.loginService.login(this.model.username, this.model.password)
      .subscribe((result) => {
      if (result) {
        this.loginService.getToken();
        this.location.back();
        // this.router.navigate(['home']);
      }
      else {
        this.incorrectLogin = true;
      }
    }, err=> this.incorrectLogin=true);

  }
}
