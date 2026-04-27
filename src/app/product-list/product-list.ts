import { Component } from '@angular/core';
import { ProductService } from '../product-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-list',
  imports: [FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  constructor(private productService: ProductService) {}
  productArr: string[] = [];
  productName: string = ''
  ngOnInit(): void{
    this.productArr=this.productService.getProduct();
  }

  addNewProduct() {
    this.productService.addProduct(this.productName);
    this.productName=''
  }
}
