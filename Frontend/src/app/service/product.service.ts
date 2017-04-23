import {Injectable, ElementRef} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";
import {Product} from "../api/product.model";
import {LoginService} from "./login.service";


@Injectable()
export class ProductService {

  constructor(private http: Http,
              private routeService: RouteService,
              private loginService: LoginService) {
  }

  private title: string;
  headers = new Headers({'Content-Type': 'application/json'});
  admin = "ROLE_ADMIN";

  getListProducts(categoryId: number): Observable<Product[]> {
    return this.http.get(this.routeService.routes.listUrl + `/${categoryId}`)
      .map(res => res.json()).catch(this.handleError);
  }


  getProduct(id: number): Observable<Product> {
    return this.http.get(this.routeService.routes.detailsUrl + `/${id}`)
      .map(r => r.json()).catch(this.handleError);
  }

  getImage(id: number): String {
    return this.routeService.routes.imageUrl + `/${id}`;
  }

  search(title: string): Observable<Product> {
    return this.http.get(this.routeService.routes.searchUrl + `/${title}`)
      .map(r => r.json()).catch(this.handleError);
  }

  setTitle(title: string) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  addProduct(input: ElementRef, product: any, categoryId: number) {
    let inputEl: HTMLInputElement = input.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('file', inputEl.files.item(i));
      }
      formData.append('product', JSON.stringify(product));
      formData.append('token', JSON.stringify(this.loginService.getToken()));
      return this.http.post(this.routeService.routes.addUrl + `/${categoryId}`, formData)
        .catch(this.handleError);
    }
  }

  deleteProduct(id: number) {
    return this.http.post(this.routeService.routes.delUrl + `/${id}`, JSON.stringify(this.loginService.getToken()), {headers: this.headers}
    ).catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity: 'error', summary: 'Error Message', detail: "Some error"});
    return Observable.throw(msgs);
  }

  checkStorage() {
    return !!localStorage.getItem('currentUser');
  }

  cleanStorage() {
    localStorage.removeItem('currentUser');
  }

  isAdmin() {
    return !!(localStorage.getItem('roleUser') && JSON.parse(localStorage.getItem('roleUser')).roleUser == this.admin);
  }
}
