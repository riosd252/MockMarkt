import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss'],
})
export class FavouritesComponent implements OnInit {
  favs: Product[] = [];

  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.favs = this.productSrv.favourites;
  }
}
