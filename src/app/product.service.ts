import { Injectable } from '@angular/core';
import { PRODUCTS } from './mock-products';
import { Product } from './products';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    this.messageService.add('Product Service: Retrieved products ');
    return products;
  }

  getProduct(id: number): Observable<Product> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const product = PRODUCTS.find(p => p.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(product);
  }

  /* get products method 2
  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
  */

  /* products method
  getProducts(): Product[] {
    return PRODUCTS;
  }
  */
  constructor(private messageService: MessageService) { }
}
