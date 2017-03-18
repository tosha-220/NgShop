import {Component} from "@angular/core";
import {ProductService} from "./service/product.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [ProductService]
})

export class AppComponent {

}
