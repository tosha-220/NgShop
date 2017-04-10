import "rxjs/add/operator/switchMap";
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {Product} from "../api/product.model";
import {ProductService} from "../service/product.service";
import {Message} from "primeng/components/common/api";

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
              private location: Location) {
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
}
