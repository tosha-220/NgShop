import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {listUrl} from "./common";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {Product} from "./api/product";


@Injectable()
export class ProductService {

  constructor(private http: Http) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get(listUrl).map(res => res.json());
  }

  getProduct(id: number): Promise<Product> {
    return this.getAll().toPromise()
      .then(products => products.find(product => product.id === id));
  }
}
