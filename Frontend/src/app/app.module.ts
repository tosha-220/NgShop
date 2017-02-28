import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./product.service";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule],
  declarations: [AppComponent, ProductComponent, ProductsComponent],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule {
}
