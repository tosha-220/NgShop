import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../service/cart.service";
import {CartEntity} from "../api/cart.entity";
import {Location} from "@angular/common";

@Component({
  moduleId: module.id,
  selector: 'cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private route: ActivatedRoute, private cartService: CartService, private location: Location) {
  }

  cart: CartEntity[];
  totalSum:number;

  ngOnInit(): void {
    this.cart = this.cartService.getFullCart();
    this.totalSum=this.cartService.getTotalSum();
  }

  // goBack(): void {
  //   this.location.back();
  // }
  removeByTitle(title:string) {

    this.cart = this.cart.filter(entry => entry.item.title != title);
    this.cartService.saveCart(this.cart);
    this.totalSum=this.cartService.totalSum;
  }
  changeQuantity (title:string, valueChange:number){
    this.cartService.changeQuantity(title,valueChange);
  }
}
