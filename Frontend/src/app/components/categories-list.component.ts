import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Message} from "primeng/components/common/api";
import {Categories} from "../api/category.model";
import {CategoriesService} from "../service/category.service";
import {ProductService} from "../service/product.service";
import {Product} from "../api/product.model";
import {LoginService} from "../service/login.service";

@Component({
  moduleId: module.id,
  selector: 'categs',
  templateUrl: 'categories-list.component.html',
  styleUrls: ['categories-list.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[];
  selectedProduct: Product;
  id: string;
  error: Message[] = [];

  constructor(private router: Router,
              private categoriesService: CategoriesService,
              private productService: ProductService,
              private loginService: LoginService) {
  }


  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(r => this.categories = r,
      error => this.error = error);
  }

  cart() {
    this.router.navigate(['/cart']);
  }

  listItems(id: number): void {
    console.log(id);
    this.router.navigate(['/item', id]);
  }

  search(): void {
    this.productService.search(this.id).subscribe(r => {
      this.selectedProduct = r;
      this.router.navigate(['/detail', this.selectedProduct.id])
    },err=>this.error=err);
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.loginService.logout().subscribe(res => {
      this.router.navigate(['/home'])
    },err=>this.error=err);
  }

  isLoggin() {
    return this.categoriesService.isLoggin();
  }

  isAdmin() {
    return this.productService.isAdmin();
  }

  getUserName() {
    return this.categoriesService.getUserName();
  }

  setTitle(title: string) {
    this.productService.setTitle(title);
  }

  getinf() {
    console.log(localStorage)
  }
}
