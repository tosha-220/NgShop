import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";
import {Product} from "../api/product.model";


@Injectable()
export class ProductService {

  constructor(private http: Http, private routeService: RouteService) {
  }

  getListProducts(categoryId: number): Observable<Product[]> {
    return this.http.get(this.routeService.routes.listUrl + `/${categoryId}`).map(res => res.json()).catch(this.handleError);
  }


  getProduct(id: number): Observable<Product> {
    return this.http.get(this.routeService.routes.detailsUrl + `/${id}`).map(r => r.json()).catch(this.handleError);
  }

  getImage(id: number): String {
    return this.routeService.routes.imageUrl + `/${id}`;
  }

  search(title: string): Observable<Product> {
    return this.http.get(this.routeService.routes.searchUrl + `/${title}`).map(r => r.json()).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity: 'error', summary: 'Error Message', detail: 'No connection'});
    return Observable.throw(msgs);
  }
}
