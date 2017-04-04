import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";
import {Cart} from "../api/cart.model";
import {Product} from "../api/product.model";
import {User} from "../api/user.model";
import {Order} from "../api/order.model";


@Injectable()
export class CartService {
  cart: Cart[] = [];
  totalSum: number = 0;
  quantity: number = 1;

  constructor(private http: Http,
              private routeService: RouteService) {
  }

  saveCart(cart: Cart[]) {
    this.cart = cart;
    this.totalSum = 0;
    for (let i = 0; i < cart.length; i++)
      this.totalSum += cart[i].sum;
  }

  addToCart(item: Product) {
    if (this.cart.length == 0) {
      let newCart: Cart = {item: item, sum: +[item.price], quantity: this.quantity};
      this.cart.push(newCart);
      this.totalSumIncr(item);
      return;
    }
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].item.title == item.title) {
        this.cart[i].quantity++;
        this.cart[i].sum += +[item.price];
        this.totalSumIncr(item);
        return;
      }
    }
    this.totalSumIncr(item);
    let secondCart: Cart = {item: item, sum: +[item.price], quantity: this.quantity};
    this.cart.push(secondCart);
  }

  private totalSumIncr(item: Product) {
    this.totalSum += +[item.price];
  }

  getFullCart(): Cart[] {
    return this.cart;
  }

  getTotalSum() {
    return this.totalSum;
  }

  changeQuantity(title: string, valueChange: number) {

    let cartEntry = this.cart.find(entry => entry.item.title === title);
    let newValue = cartEntry.quantity + valueChange;
    if (newValue > 0) {
      cartEntry.quantity = newValue;
      cartEntry.sum = cartEntry.item.price * cartEntry.quantity;
    }
    this.calcTotalSum(this.cart);

  }

  calcTotalSum(cartEntity: Cart[]) {
    this.totalSum = 0;
    for (let i = 0; i < cartEntity.length; i++) {
      this.totalSum += cartEntity[i].sum;

    }
  }

  buy(user: User): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
    return this.http.post(this.routeService.routes.buyingUrl,
      JSON.stringify(new Order(this.cart, user, this.totalSum)), {headers: headers})
      .map(this.goodInfo).catch(this.handleError);
  }

  private goodInfo(info: Response | String) {
    let msgs: Message[] = [];
    msgs.push({severity: 'info', summary: 'Info Message', detail: 'Order succesfully completed'});
    return msgs;
  }

  private handleError(error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity: 'error', summary: 'Error Message', detail: 'No connection'});
    return Observable.throw(msgs);
  }
}
