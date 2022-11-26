import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product/Product';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClientService) {}

  getProducts() {
    return this.httpClient.get<Product>('/products');
  }
}
