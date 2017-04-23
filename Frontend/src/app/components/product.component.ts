import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../api/product.model";
import {ProductService} from "../service/product.service";
import {Message} from "primeng/components/common/api";
import {CategoriesService} from "../service/category.service";
import {CartService} from "../service/cart.service";

@Component({
  moduleId: module.id,
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  msgs: Message[] = [];

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private categoryService: CategoriesService,
              private cartService:CartService) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.productService.getProduct(+params['id']))
      .subscribe(product => this.product = product, error => this.msgs = error);
  }

  goBack(): void {
    this.location.back();
  }

  getImage(id: number): String {
    return this.productService.getImage(id);
  }

  getTitle() {
    return this.productService.getTitle();
  }

  deleteProduct(id: number) {
    if (this.productService.checkStorage()) {
      this.productService.deleteProduct(id).subscribe(res => {
        if (res.text() == "false") {
          if (localStorage.getItem('currentUser')) {
            localStorage.removeItem('currentUser');
          }
          console.log("Token is die");
          this.router.navigate(['/login']);
        }
        else {
          this.goBack();
        }
      })
    }
  }

  isLoggin() {
    return this.categoryService.isLoggin();
  }
  isAdmin(){
    return this.productService.isAdmin();
  }
  addToCart(product:Product){
    this.cartService.addToCart(product);
  }
}
