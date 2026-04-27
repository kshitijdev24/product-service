import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: string[] = [];

  addProduct(product: string) {
    this.productList.push(product);
    console.log(this.productList);
  }

  getProduct(): string[]{
    return this.productList
  }
}
