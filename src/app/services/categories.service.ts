import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces/category';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {
        
        this.http.get<Category[]>(`${environment.apiUrl}v1/categories`).subscribe(
          categories => {
            observer.next(categories);
            observer.complete();
          },
          () => { 
            observer.error('error_on_get_categories');
            observer.complete();
          }
        )
    });
}
  constructor(
    private http: HttpClient,
  ) { }
}

