import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProductsListComponent} from "./components/products-list.component";
import {ProductComponent} from "./components/product.component";
import {CartComponent} from "./components/cart.component";
import {LoginComponent} from "./components/login.component";
import {AddProductComponent} from "./components/add.product.component";
import {LoginGuard} from "./service/login.guard";
import {NotFoundComponent} from "./components/notfound.component";
import {AuthenticatedGuard} from "./service/authenticated.guard";

const routes: Routes = [
  {path: 'detail/:id', component: ProductComponent},
  {path: 'item/:id', component: ProductsListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'add/:categoryId', component: AddProductComponent, canActivate: [AuthenticatedGuard]},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
