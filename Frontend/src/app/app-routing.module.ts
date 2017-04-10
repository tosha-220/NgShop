import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsListComponent} from "./components/products-list.component";
import {ProductComponent} from "./components/product.component";
import {CartComponent} from "./components/cart.component";

const routes: Routes = [
  {path: 'detail/:id', component: ProductComponent},
  {path: 'item/:id', component: ProductsListComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
