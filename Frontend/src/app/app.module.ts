import {NgModule, APP_INITIALIZER} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./product.service";
import {CarouselModule,ButtonModule,DialogModule,GrowlModule} from 'primeng/primeng';
import {RouteService} from "./route.service";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule,CarouselModule,ButtonModule,DialogModule,GrowlModule],
  declarations: [AppComponent, ProductComponent, ProductsComponent],
  bootstrap: [AppComponent],
  providers: [ProductService,RouteService,
  {
    provide: APP_INITIALIZER,
    useFactory: (route: RouteService) => { return () => route.init() },
    deps: [RouteService],
    multi: true
  }
]})
export class AppModule {
}
