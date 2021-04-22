import { environment } from 'src/environments/environment';
import { ProductsHighlights} from 'src/app/interfaces/Products highlights';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  
  getProductsHighlights(): Observable<ProductsHighlights[]> {
    return new Observable<ProductsHighlights[]>(observer => {
      // importando o enviroment para adicionar a url da aplicação
      this.http.get<ProductsHighlights[]>(`${environment.AppUrl}v1/products-highlights`).subscribe(productsHighlights => {
        observer.next(productsHighlights);
        observer.complete();
        console.log(productsHighlights[0].name);
      },
        // se der algum erro na req ira ser chamado ese callback
        () => {
          observer.error('error_on_get_Products_highlights');
          observer.complete();
        }
      );
    });
  }
  getProduct(id: string): Observable<Product> {
    return new Observable<Product>(observer => {
      this.http.get<Product>(`${environment.AppUrl}v1/product/${id}`).subscribe(
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
}