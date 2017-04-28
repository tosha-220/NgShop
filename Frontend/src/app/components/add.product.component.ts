import "rxjs/add/operator/switchMap";
import {Component, ViewChild, ElementRef} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../service/product.service";
import {Message} from "primeng/components/common/api";

@Component({
  moduleId: module.id,
  selector: 'add',
  templateUrl: './add.product.component.html',
  styleUrls: ['./add.product.component.css']
})
export class AddProductComponent {
  @ViewChild('fileInput') inputEl: ElementRef;
  msgs: Message[];
  categoryId: number;
  private sub: any;
  form: any = {};

  constructor(private productService: ProductService,
              private route: ActivatedRoute, private router: Router) {
  }


  addProduct() {
    if (this.productService.checkStorage()) {
      this.sub = this.route.params.subscribe(params => {
        this.categoryId = +params['categoryId'];
      });
      this.productService.addProduct(this.inputEl, this.form, this.categoryId).subscribe(res => {
        if (res.text() == "false") {
          this.productService.cleanStorage();
          console.log("Token is die");
        }

        this.router.navigate(['/item', this.categoryId]);

      },err=>this.msgs);
    }
  }
}
