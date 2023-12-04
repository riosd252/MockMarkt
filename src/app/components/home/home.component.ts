import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sub!: Subscription;
  products: Product[] | undefined;

  constructor(private productSrv: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.sub = this.productSrv.getProducts().subscribe((resp) => {
      this.products = resp;
    });
  }

  addToFavs(product: Product, event: Event) {
    this.productSrv.addToFav(product);
    const button = event.currentTarget as HTMLButtonElement;
    button.classList.add('disabled');
  }
}
