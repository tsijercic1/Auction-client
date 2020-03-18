import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {ShopComponent} from './shop/shop.component';
import {MyAccountComponent} from './my-account/my-account.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SingleProductComponent} from './shop/single-product/single-product.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, data: {routeName: 'Login'}},
  {path: 'register', component: RegistrationComponent, data: {routeName: 'Register'}},
  {path: 'home', component: HomeComponent, data: {routeName: 'Home'}},
  {
    path: 'shop', data: {routeName: 'Shop'},
    children: [
      {path: '', component: ShopComponent, },
      {path: ':id', component: SingleProductComponent, data: {routeName: 'Single Product'}}
    ]
  },
  {path: 'myAccount', component: MyAccountComponent, data: {routeName: 'My Account'}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

