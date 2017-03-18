import {NgModule, APP_INITIALIZER} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ProductsComponent} from "./components/products-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./service/product.service";
import {CarouselModule, ButtonModule, DialogModule, GrowlModule} from "primeng/primeng";
import {RouteService} from "./service/route.service";
import {NavigationComponent} from "./components/navigation.component";
import {ProductComponent} from "./components/product.component";
import {CategoriesService} from "./service/categories.service";
import {CategoriesComponent} from "./components/categories-list.component";
import {CartComponent} from "./components/cart.component";
import {CartService} from "./service/cart.service";
import {DataTableModule} from "primeng/components/datatable/datatable";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, CarouselModule, ButtonModule, DialogModule, GrowlModule,DataTableModule],
  declarations: [AppComponent, ProductComponent, ProductsComponent, NavigationComponent, CategoriesComponent, CartComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, RouteService, CategoriesService,CartService,
    {
      provide: APP_INITIALIZER,
      useFactory: (route: RouteService) => {
        return () => route.init()
      },
      deps: [RouteService],
      multi: true
    }
  ]
})
export class AppModule {
}
