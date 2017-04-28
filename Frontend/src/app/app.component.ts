import {Component, OnInit} from "@angular/core";
import {ProductService} from "./service/product.service";
import {LoginService} from "./service/login.service";
import {Http} from "@angular/http";
import {RouteService} from "./service/route.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ProductService]
})

export class AppComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {
    if (this.loginService.getToken()) {
      this.loginService.verifyToken();
    }
  }

}
