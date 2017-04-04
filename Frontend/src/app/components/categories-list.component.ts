import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Message} from "primeng/components/common/api";
import {Categories} from "../api/category.model";
import {CategoriesService} from "../service/category.service";
import {ProductService} from "../service/product.service";
import {Product} from "../api/product.model";

@Component({
  moduleId: module.id,
  selector: 'categs',
  templateUrl: 'categories-list.component.html',
  styleUrls: ['categories-list.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Categories[];
  msgs: Message[] = [];
  selectedProduct: Product;
  id: string;

  constructor(private router: Router,
              private categoriesService: CategoriesService,
              private productService: ProductService) {
  }


  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(r => this.categories = r,
      error => this.msgs = error);
  }

  cart() {
    this.router.navigate(['/cart']);
  }

  listItems(id: number): void {
    this.router.navigate(['/item', id]);
  }

  search(): void {
    this.productService.search(this.id).subscribe(r => this.selectedProduct = r);
    this.router.navigate(['/detail', this.selectedProduct.id]);

  }
}
