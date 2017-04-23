import {NgModule, APP_INITIALIZER} from "@angular/core";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {ProductsListComponent} from "./components/products-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {ProductService} from "./service/product.service";
import {CarouselModule, ButtonModule, DialogModule, GrowlModule} from "primeng/primeng";
import {RouteService} from "./service/route.service";
import {NavigationComponent} from "./components/navigation.component";
import {ProductComponent} from "./components/product.component";
import {CategoriesService} from "./service/category.service";
import {CategoriesComponent} from "./components/categories-list.component";
import {CartComponent} from "./components/cart.component";
import {CartService} from "./service/cart.service";
import {DataTableModule} from "primeng/components/datatable/datatable";
import {DataGridModule} from "primeng/components/datagrid/datagrid";
import {PanelModule} from "primeng/components/panel/panel";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./components/login.component";
import {LoginService} from "./service/login.service";
import {AddProductComponent} from "./components/add.product.component";
import {AuthenticatedGuard} from "./service/authenticated.guard";
import {LoginGuard} from "./service/login.guard";
import {NotFoundComponent} from "./components/notfound.component";

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, CarouselModule, FormsModule,
    ButtonModule, DialogModule, GrowlModule, DataTableModule, DataGridModule, PanelModule],
  declarations: [AppComponent, ProductComponent, ProductsListComponent,
    NavigationComponent, CategoriesComponent, CartComponent, LoginComponent, AddProductComponent,
    NotFoundComponent],
  bootstrap: [AppComponent],
  providers: [ProductService, RouteService, CategoriesService, CartService, LoginService, AuthenticatedGuard,
    LoginGuard,
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
