import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalType, Product } from 'src/app/interfaces/product';
import { MockComponents } from 'ng-mocks';
import { ProductItemComponent } from './product-item.component';
import { ProductServiceMock } from 'src/app/mocks/products-mock';
import { ProductsService } from 'src/app/services/products.service';
import { MatIcon } from '@angular/material/icon';
import { MatCard } from '@angular/material/card';


const product: Product = {
  "name": "Product",
  "description": "Product",
  "value": 204.9,
  "promotional_value": 184.41,
  "featured_image": 'image_url',
  "images": [],
  "videos": [],
  "rating_stars": 5,
  "rating_count": 424,
  "installment_available": true,
  "installment_count": 2,
  "featured": true,
  "animal_type": AnimalType.Dog,
  "category": 'Medicina e Saúde',
  "subcategory": 'Antipulgas e Carrapatos',
  "url": '/url',
  "created_at": '2021-04-12 21:28:35.881119+00:00',
  "id": 'EJf7MU4hES59rlLMJrdH'
}


describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        ProductItemComponent,
        MockComponents(
          MatIcon,
          MatCard
        )
      ],

      providers: [
        {

        provide:ProductsService,
        useClass:ProductServiceMock
        
        }
      ]



    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show five icon stars', () => {
    const html = fixture.nativeElement;    
    const matIcons = document.getElementsByTagName('mat-icon');  
    expect(matIcons.length).toEqual(5);    
    expect(matIcons[0].textContent?.trim()).toContain('star');
  });

  it('should check product name in html', () => {
    const html = fixture.nativeElement;
    const productName = document.querySelector('mat-card .product-name');
    expect(productName?.textContent).toEqual(`${product.name}`);
    console.log(`${product.name}`)
  });

  it('should check product_value in html', () => {
    const html = fixture.nativeElement;
    const productValue = document.querySelector('mat-card .original-value');
    expect(productValue?.textContent).toContain(`${product.value}`);
    console.log(`${product.value}`)
  });

  it('should show stars with 3.5 rating star', () => {
    component.product.rating_stars = 3.5
    fixture.autoDetectChanges();
    const matIcons = document.getElementsByTagName('mat-icon');
    expect(matIcons[0].textContent?.trim()).toContain('star');
    expect(matIcons[3].textContent?.trim()).toContain('star_half');
    expect(matIcons[4].textContent?.trim()).toContain('star_border');
  });

 });



