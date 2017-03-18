import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";
import {Product} from "../api/product";
import {SimpleProduct} from "../api/simple.product";


@Injectable()
export class ProductService {

  constructor(private http: Http, private routeService:RouteService) {
  }

  getListProducts(categoryId:number): Observable<SimpleProduct[]> {
    return this.http.get(this.routeService.routes.listUrl+`/${categoryId}`).map(res => res.json()).catch(this.handleError);
  }


  getProduct(id: number): Observable<Product>  {
    return this.http.get(this.routeService.routes.getByIdUrl+`/${id}`).map(r => r.json()).catch(this.handleError);
  }

  getImage(id:number):String{
    console.log(this.routeService.routes.imageUrl+`/${id}`);
    return this.routeService.routes.imageUrl+`/${id}`;
  }

  private handleError (error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity:'error', summary:'Error Message', detail:'No connection'});
    return Observable.throw(msgs);
  }
}
