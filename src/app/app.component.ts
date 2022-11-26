import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from './services/ProductService/product.service';
import { setProducts } from './store/actions/ProductActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result) => {
      this.store.dispatch(setProducts({ productDetails: result.products }));
      console.log(result.products);
    });
  }
  // change(item: ProductDetail) {
  //   this.products?.products.map((prod) => {
  //     if (prod.id === item.id) {
  //       prod.title = 'Ugur Değiştirdi.';
  //     }
  //   });
  // }
}
