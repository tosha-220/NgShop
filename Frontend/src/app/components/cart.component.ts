import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../service/cart.service";
import {Cart} from "../api/cart.model";
import {Location} from "@angular/common";
import {User} from "../api/user.model";
import {Message} from "@angular/compiler/src/i18n/i18n_ast";

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartService, private location: Location) {
  }

  cart: Cart[];
  totalSum: number;
  user: User = new User();
  msgs: Message[] = [];

  ngOnInit(): void {
    this.cart = this.cartService.getFullCart();
    this.totalSum = this.cartService.getTotalSum();
  }

  removeByTitle(title: string) {

    this.cart = this.cart.filter(entry => entry.item.title != title);
    this.cartService.saveCart(this.cart);
    this.totalSum = this.cartService.totalSum;
  }

  changeQuantity(title: string, valueChange: number) {
    this.cartService.changeQuantity(title, valueChange);
    this.totalSum = this.cartService.getTotalSum();
  }

  buy(user: User): void {
    this.cartService.buy(user).subscribe(pr => this.goodInfo(pr), err => this.msgs = err);
  }

  private goodInfo(info: Message[]) {
    this.msgs = info;
    setTimeout(() => {
      this.location.back();
      this.cartService.totalSum = 0;
      this.cart = this.cart.filter(entry => entry.item.title == "");
      this.cartService.saveCart(this.cart);
    }, 2000);

  }
}
