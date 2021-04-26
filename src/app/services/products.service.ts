import { environment } from 'src/environments/environment';
import { ProductsHighlights} from 'src/app/interfaces/product-highlights';
import { observable, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductsGetResponse } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsHighlights(): Observable<ProductsHighlights[]> {
    return new Observable<ProductsHighlights[]>(observer => {
      this.http.get<ProductsHighlights[]>(`${environment.apiUrl}v1/products-highlights`).subscribe(productsHighlights => {
        observer.next(productsHighlights);
        observer.complete();
        console.log(productsHighlights[0].name);
      },
        () => {
          observer.error('error_on_get_Products_highlights');
          observer.complete();
        }
      );
    });
  }

  getProduct(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      this.http.get<Product>(`${environment.apiUrl}v1/product/${id}`).subscribe(
      product => {
        observer.next(product);
        observer.complete();
      },
      error => {
        observer.next(error);
        observer.complete();
      }
      );
    });
  };
  
  getProducts() {
    return new Observable<ProductsGetResponse>(observer => {
      this.http.get<ProductsGetResponse>(`${environment.apiUrl}v1/products`).subscribe(
        products => {
          observer.next(products);
          observer.complete();
        },
        error => {
          observer.next(error);
          observer.complete();
        }
      )
    })
  }

}
