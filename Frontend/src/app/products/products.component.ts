import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Product} from "../api/product";
import {ProductService} from "../product.service";
import {Message} from "primeng/components/common/api";

@Component({
  moduleId: module.id,
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  displayDialog: boolean;
  msgs: Message[] = [];

  constructor(private router: Router,
              private productService: ProductService) {
  }

  getAll(): void {
    this.productService.getAll().subscribe(r => this.products = r,error =>  this.msgs = error);
  }

  ngOnInit(): void {
    this.getAll();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.showDialog();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedProduct.id]);
  }
  onDialogHide() {
    this.selectedProduct = null;
  }
  showDialog() {
    this.displayDialog = true;
  }
}
