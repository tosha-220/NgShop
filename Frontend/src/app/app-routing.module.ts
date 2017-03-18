import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "./components/products-list.component";
import {ProductComponent} from "./components/product.component";
import {CategoriesComponent} from "./components/categories-list.component";
import {CartComponent} from "./components/cart.component";
import {NavigationComponent} from "./components/navigation.component";

const routes: Routes = [
  {path: 'detail/:id', component: ProductComponent},
  {path: 'item/:id', component: ProductsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
