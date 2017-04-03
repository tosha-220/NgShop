import {Cart} from "./cart.model";
import {User} from "./user.model";
export class Order {
  cart: Cart[];
  user: User;
  totalSum: number;

  constructor(cart: Cart[], user: User, totalSum: number) {
    this.cart = cart;
    this.user = user;
    this.totalSum = totalSum;
  }
}
