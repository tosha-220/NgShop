import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Product} from "../api/product";
import {ProductService} from "../service/product.service";
import {Message} from "primeng/components/common/api";
import {SimpleProduct} from "../api/simple.product";
import {CartService} from "../service/cart.service";

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css']
})
export class ProductsComponent implements OnInit {
  simpleList: SimpleProduct[];
  msgs: Message[] = [];
  // item:SimpleProduct[]=[];

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getListProducts(+params['id']))
      .subscribe(products => this.simpleList = products,error =>  this.msgs = error);
  }

  addToCart(product:SimpleProduct){
    this.cartService.addToCart(product);
  }

  gotoDetail(product:Product): void {
    this.router.navigate(['/detail', product.id]);
  }
  getImage(id:number):String{
    return this.productService.getImage(id);
  }
}
