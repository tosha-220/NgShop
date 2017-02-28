import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../api/product";
import {ProductService} from "../product.service";

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private router: Router,
              private productService: ProductService) {
  }

  getAll(): void {
    this.productService.getAll().subscribe(r => this.products = r);
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
}
