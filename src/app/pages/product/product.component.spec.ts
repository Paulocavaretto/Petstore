import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductsService } from 'src/app/services/products.service';
import { from } from 'rxjs';
import { ProductComponent } from './product.component';
import { ActivatedRoute } from '@angular/router';
import { AnimalType, Product } from 'src/app/interfaces/product';


const Product: Product = {
  name: 'Ração Seca',
  description: 'Ração para cachorro',
  value: 158.9,
  promotional_value: 143.07,
  featured_image: '',
  images: [],
  videos: [],
  rating_stars: 5,
  rating_count: 8,
  installment_available: true,
  installment_count: 3,
  featured: true,
  category: 'ração',
  subcategory: 'ração seca',
  animal_type: AnimalType.Dog,
  created_at: '2021-04-11 14:22:17.916440+00:00',
  id: 'ID1',
  url: ''
}

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent,],
      providers: [
        {
        provide: ProductsService,
        useClass: ProductServiceMock,
        },
        {
        provide: ActivatedRoute,
        useValue:{
          snapshot:{
            paramMap:{
              get(id: string){
                return
                }
              }
            }
          }
         }
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should check  title item in HTML', () => {
    component.product = Product;
    fixture.detectChanges();
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('product-detail')[0].textContent;
    expect(result).toContain(Product.name);
  });

  it('should check product price original value', () => { 
    component.product = Product;
    fixture.detectChanges();
    const html = fixture.nativeElement;
    const result = html.getElementsByClassName('value-without-promotion')[0].textContent;
    expect(result).toContain(Product.value);
  })
  
});

