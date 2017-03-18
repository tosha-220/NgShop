import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toPromise";
import {Message} from "primeng/components/common/api";
import {RouteService} from "./route.service";
import {SimpleProduct} from "../api/simple.product";
import {CartEntity} from "../api/cart.entity";


@Injectable()
export class CartService {
  cart: CartEntity[] = [];
  // simpleItems:SimpleProduct[]=[];
  totalSum: number = 0;

  quantity: number = 1;

  constructor(private http: Http, private routeService: RouteService) {
  }

  saveCart(cart:CartEntity[]){
    this.cart=cart;
    this.totalSum=0;
    for(var i=0;i<cart.length;i++)
    this.totalSum+=cart[i].sum;
  }

  addToCart(item: SimpleProduct) {
    if (this.cart.length == 0) {
      var newCart: CartEntity = {item: item, sum: +[item.price], quantity: this.quantity};
      this.cart.push(newCart);
      this.totalSumIncr(item);
      return;
    }
    for (var i = 0; i < this.cart.length; i++) {
      console.log(this.totalSum);
      if (this.cart[i].item.title == item.title) {
        this.cart[i].quantity++;
        this.cart[i].sum += +[item.price];
        this.totalSumIncr(item);
        return;
      }
    }
    this.totalSumIncr(item);
    var secondCart: CartEntity = {item: item, sum: +[item.price], quantity: this.quantity};
    this.cart.push(secondCart);
  }

  private totalSumIncr(item: SimpleProduct) {
    this.totalSum += +[item.price]
  }

  getFullCart(): CartEntity[] {
    return this.cart;
  }
  getTotalSum(){
    return this.totalSum;
  }

  changeQuantity (title:string, valueChange:number){

    let cartEntry = this.cart.find(entry => entry.item.title === title);

    let newValue = cartEntry.quantity + valueChange;
    if(newValue > 0) {
      cartEntry.quantity = newValue;
      cartEntry.sum=cartEntry.item.price*cartEntry.quantity;
    }
    this.calcTotalSum(this.cart);

  }
  private handleError(error: Response | any) {
    let msgs: Message[] = [];
    msgs.push({severity: 'error', summary: 'Error Message', detail: 'No connection'});
    return Observable.throw(msgs);
  }
  calcTotalSum(cartEntity:CartEntity[]){
    this.totalSum=0;
    for(var i=0;i<cartEntity.length;i++){
      console.log(cartEntity[i].quantity);
      console.log(cartEntity[i].sum);
      console.log('before',this.totalSum,' after ',this.totalSum);
      this.totalSum+=cartEntity[i].sum;

    }
  }

}
