import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";
import {Categories} from "../api/category.model";


@Injectable()
export class CategoriesService {

  constructor(private http: Http,
              private routeService: RouteService) {
  }

  getCategories(): Observable<Categories[]> {
    return this.http.get(this.routeService.routes.listCategoriesUrl)
      .map(res => res.json()).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity: 'error', summary: 'Error Message', detail: 'No connection'});
    return Observable.throw(msgs);
  }
}
