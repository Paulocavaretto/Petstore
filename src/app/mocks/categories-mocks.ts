import {Observable} from "rxjs";
import{Category} from "../interfaces/category";

export class CategoryServiceMock {

     getCategories(): Observable<Category[]>{
         return new Observable<Category[]>(observer => {
             observer.next([
                 {id: 'dasdasd', name: 'Ração', subcategories: ['ração seca'], url: ''},
                 {id: 'dasdasd', name: 'Brinquedo', subcategories: ['pelucia'], url:''}
                 
             ]);
             observer.complete()
         });
   }
}