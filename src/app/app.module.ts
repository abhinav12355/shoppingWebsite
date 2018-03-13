import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Third Party Imports

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap';

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
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: MainpageComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'men', component: MenComponent },
  { path: 'women', component: WomenComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'books', component: BooksComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
];

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
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
