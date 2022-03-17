import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
//import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  product: Product = {
    id: 100,
    name: "Lenovo",
    model: "LV123",
    description: "New",
    serial: "A13456",
    cost: "300",
    qty: "5",
  };

  /*get products method
  getProducts(): void {
    this.products = this.productService.getProducts();
  }
  */
  getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }
  //products = PRODUCTS;

  products: Product[] = [];

  selectedProducts?: Product;


onSelect(products: Product): void {
  this.selectedProducts = products;
  this.messageService.add(`ProductsComponent: Selected product id=${products.id}`);
}

  constructor(private productService: ProductService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getProducts();
  }

}
