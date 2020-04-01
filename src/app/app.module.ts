import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ShopListComponent } from './shop/shop-list/shop-list.component';
import { ShopItemComponent } from './shop/shop-list/shop-item/shop-item.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { CategoryListComponent } from './shop/category-list/category-list.component';
import { CategoryItemComponent } from './shop/category-list/category-item/category-item.component';
import {CommonModule} from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { SpacerComponent } from './spacer/spacer.component';
import { SingleProductComponent } from './shop/single-product/single-product.component';
import { FeatureItemComponent } from './home/feature-item/feature-item.component';
import { FeatureProductComponent } from './home/feature-product/feature-product.component';
import { TopHeaderComponent } from './header/top-header/top-header.component';
import { MainHeaderComponent } from './header/main-header/main-header.component';
import { ShowcaseComponent } from './home/showcase/showcase.component';
import { BreadcrumbComponent } from './header/breadcrumb/breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { ProductGridItemComponent } from './product-grid-item/product-grid-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ShopComponent,
    MyAccountComponent,
    ShopListComponent,
    ShopItemComponent,
    ProductDetailsComponent,
    CategoryListComponent,
    CategoryItemComponent,
    NotFoundComponent,
    FooterComponent,
    SpacerComponent,
    SingleProductComponent,
    FeatureItemComponent,
    FeatureProductComponent,
    TopHeaderComponent,
    MainHeaderComponent,
    ShowcaseComponent,
    BreadcrumbComponent,
    ProductGridItemComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
