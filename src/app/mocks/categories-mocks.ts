import { Observable } from 'rxjs';
import { Category } from "../interfaces/category";

export class CategoriesServiceMock {

    getCategories(): Observable<Category[]> {
        return new Observable<Category[]>(observer => {
            observer.next([
                {id: 'dasdasd', name:'ração', description:'', subcategories: ['ração seca'], url: ''},
                {id: 'dasdasd', name:'brinquedos', description:'',  subcategories: ['pelucia'], url: ''}
            ]);
            observer.complete()
        });
    }
}

