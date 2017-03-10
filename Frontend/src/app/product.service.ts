import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Product} from "./api/product";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";


@Injectable()
export class ProductService {

  constructor(private http: Http, private routeService:RouteService) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get(this.routeService.routes.link).map(res => res.json()).catch(this.handleError);
  }

  getProduct(id: number): Promise<Product> {
    return this.getAll().toPromise()
      .then(products => products.find(product => product.id === id));
  }
  private handleError (error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity:'error', summary:'Error Message', detail:'No connection to DB'});
    return Observable.throw(msgs);
  }
}
