import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Product} from "../api/product.model";
import {ProductService} from "../service/product.service";
import {Message} from "primeng/components/common/api";
import {CartService} from "../service/cart.service";
import {CategoriesService} from "../service/category.service";

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: 'products-list.component.html',
  styleUrls: ['products-list.component.css', '../css/bootstrap.min.css']
})
export class ProductsListComponent implements OnInit {
  simpleList: Product[];
  msgs: Message[] = [];
  categoryId: number;
  private sub: any;

  constructor(private router: Router,
              private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private categoriesService: CategoriesService,) {
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

  getStatus() {
    return this.categoriesService.isLoggin();
  }

  getTitle() {
    return this.productService.getTitle();
  }

  addProduct() {
    this.sub = this.route.params.subscribe(params => {
      this.categoryId = +params['id'];
    });
    this.router.navigate(['/add', this.categoryId]);
  }

  delete(product: Product) {
    if (this.productService.checkStorage()) {
      this.productService.deleteProduct(product.id).subscribe(res => {
        if (res.text() == "false") {
          if (this.productService.checkStorage()) {
            this.productService.cleanStorage();
          }
          console.log("Token is die");
        }
        this.ngOnInit();
      },err=>this.msgs=err);
    }
    this.ngOnInit();
  }
  isAdmin(){
    return this.productService.isAdmin();
  }
}
