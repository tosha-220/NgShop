import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";

@Injectable()
export class RouteService {
  routes: Routes;

  constructor(protected http: Http) {
  }

  init(): Promise<Routes> {
    let o = this.http.get("/route.json")
      .map(res => res.json()).toPromise();
    o.then(routes => this.routes = routes);
    return o;
  }
}
export interface Routes {
  listUrl: string;
  detailsUrl: string;
  listCategoriesUrl: string;
  imageUrl: string;
  searchUrl: string;
  buyingUrl: string;
  loginUrl: string;
  addUrl: string;
  delUrl: string;
  logoutUrl: string;
  verifyUrl: string;
}
