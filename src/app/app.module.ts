import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingKartComponent } from './components/shopping-kart/shopping-kart.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'favourite-products', component: FavouritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ShoppingKartComponent,
    FavouritesComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
