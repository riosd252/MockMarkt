import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = environment.apiUrl;
  favourites: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http
      .get<{ products: Product[] }>(this.url)
      .pipe(map((data) => data.products));
  }

  addToFav(product: Product) {
    this.favourites.push(product);
    return console.log(this.favourites);
  }
}
