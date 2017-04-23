import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {RouteService} from "./route.service";
import {Login} from "../api/login.component";
import {Router} from "@angular/router";
import {Message} from "primeng/components/common/api";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LoginService {

  constructor(private http: Http,
              private routeService: RouteService,
              private router: Router) {
  }

  headers = new Headers({'Content-Type': 'application/json'});

  token: string;

  login(username: string, password: string) {
    return this.http.post(this.routeService.routes.loginUrl, JSON.stringify(new Login(username, password)), {headers: this.headers})
      .map((response: Response) => {
        let token = response.json() && response.json().token;
        if (token && token != "false") {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
          localStorage.setItem('roleUser', JSON.stringify({roleUser: response.json().roleUser}));
          return true;
        } else {
          return false;
        }
      });

  }

  getToken() {
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser')).token;
    }
  }

  verifyToken() {
    return this.http.post(this.routeService.routes.verifyUrl,
      JSON.stringify(this.getToken()), {headers: this.headers})
      .subscribe(res => {
        if (res.text() == "false") {
          this.logout()
        }
      });
  }

  logout() {
    this.token = null;
    localStorage.removeItem('currentUser');
    return this.http.get(this.routeService.routes.logoutUrl).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let msgs: Message[] = [];
    // let details = error.json().error;
    msgs.push({severity: 'error', summary: 'Error Message', detail: "Some error"});
    return Observable.throw(msgs);
  }
}
