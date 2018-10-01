import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StepsModule} from 'primeng/steps';
import {MenuItem} from 'primeng/api';
import {ProgressBarModule} from 'primeng/progressbar';
import{FlashMessageModule} from 'angular-flash-message';
//Third Party Imports

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpModule} from '@angular/http';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SpinnerModule} from 'primeng/spinner';

import { AppComponent } from './app.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { Carousel1Component } from './carousel1/carousel1.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { SportsComponent } from './sports/sports.component';
import { BooksComponent } from './books/books.component';
import { OffersComponent } from './offers/offers.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ItemService } from './item.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdditemsComponent } from './additems/additems.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import {GrowlModule,Message} from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { CheckoutComponent } from './checkout/checkout.component';
import { ExclusiveComponent } from './exclusive/exclusive.component';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { FooterComponent } from './footer/footer.component';
import { CarouselmenComponent } from './carouselmen/carouselmen.component';
import { CarouselwomenComponent } from './carouselwomen/carouselwomen.component';
import { CarouselsportsComponent } from './carouselsports/carouselsports.component';
import { CarouselelectronicsComponent } from './carouselelectronics/carouselelectronics.component';
import { CarouselmobileComponent } from './carouselmobile/carouselmobile.component'


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: MainpageComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'desc', component: ProductDescriptionComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'mobile', component: BooksComponent },
  { path: 'sell', component: OffersComponent },
  { path: 'cart' , component: CartComponent },
  { path: 'checkout', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: PageNotFoundComponent }
];
export function tokenGetter() {
  return localStorage.getItem('id_token');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderbarComponent,
    Carousel1Component,
    MainpageComponent,
    ElectronicsComponent,
    MenComponent,
    WomenComponent,
    SportsComponent,
    BooksComponent,
    OffersComponent,
    CartComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    AdditemsComponent,
    ProductDescriptionComponent,
    CheckoutComponent,
    ExclusiveComponent,
    FooterComponent,
    CarouselmenComponent,
    CarouselwomenComponent,
    CarouselsportsComponent,
    CarouselelectronicsComponent,
    CarouselmobileComponent,
   
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ModalModule,
    StepsModule,
    ProgressBarModule,
    GrowlModule,
    FlashMessageModule,
   SpinnerModule,
   ProgressSpinnerModule,
   FilterPipeModule,
   OrderModule
   
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
  
})
export class AppModule { 

  
}
