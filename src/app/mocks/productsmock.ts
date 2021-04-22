import { AnimalType, Product } from './../interfaces/product';
import { Observable } from 'rxjs';
import { Parameters } from './../interfaces/parameters';
export class ProductsServiceMock {
    getCategories(): Observable<Product[]> {
        return new Observable<Product[]>(observer => {
            observer.next([
                {
                    name: "Product",
                    description: "Product",
                    value: 204.9,
                    promotional_value: 184.41,
                    featured_image: 'image_url',
                    images: [],
                    videos: [],
                    rating_stars: 5,
                    rating_count: 424,
                    installment_available: true,
                    installment_count: 2,
                    featured: true,
                    animal_type: AnimalType.Dog,
                    category: 'Medicina e Saúde',
                    subcategory: 'Antipulgas e Carrapatos',
                    url: '/url',
                    created_at: '2021-04-12 21:28:35.881119+00:00',
                    id: 'EJf7MU4hES59rlLMJrdH'
                },]);
            observer.complete();
        });
    }
    getProductsHighlights(): Observable<Product[]> {
        return new Observable<Product[]>(observer => {
            observer.next([
                {
                    name: "Product",
                    description: "Product",
                    value: 204.9,
                    promotional_value: 184.41,
                    featured_image: 'image_url',
                    images: [],
                    videos: [],
                    rating_stars: 5,
                    rating_count: 424,
                    installment_available: true,
                    installment_count: 2,
                    featured: true,
                    animal_type: AnimalType.Dog,
                    category: 'Medicina e Saúde',
                    subcategory: 'Antipulgas e Carrapatos',
                    url: '/url',
                    created_at: '2021-04-12 21:28:35.881119+00:00',
                    id: 'EJf7MU4hES59rlLMJrdH'
                },]);
            observer.complete();
        });
    }
    parameters: Parameters =                 {
        "company_name": "company",
        "trademark": "trademark",
        "adress": "adress",
        "adress_complement": "adress_complement",
        "city": "city",
        "state": "state",
        "zip_code": "zip_code",
        "social_networks": [],
        "account": "account",
        "name": "name",
        "phones": [],
        "number": "number",
        "type": "type",
        "country_code": "country_code",
        "email": "email.com",
    }
    product!: Product;
    getProduct(id: string): Observable<Product> {
        return new Observable<Product>(observer => {
            observer.next(this.product);
            observer.complete();
        });
    };
    getParameters(): Observable<Parameters> {
        return new Observable<Parameters>(observer => {
            observer.next(this.parameters);
            observer.complete();
        });
}};