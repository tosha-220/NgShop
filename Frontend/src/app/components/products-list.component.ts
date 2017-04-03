import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Product} from "../api/product.model";
import {ProductService} from "../service/product.service";
import {Message} from "primeng/components/common/api";
import {CartService} from "../service/cart.service";

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css', '../css/bootstrap.min.css']
})
export class ProductsListComponent implements OnInit {
  simpleList: Product[];
  msgs: Message[] = [];

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getListProducts(+params['id']))
      .subscribe(products => this.simpleList = products, error => this.msgs = error);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  gotoDetail(product: Product): void {
    this.router.navigate(['/detail', product.id]);
  }

  getImage(id: number): String {
    return this.productService.getImage(id);
  }
}
