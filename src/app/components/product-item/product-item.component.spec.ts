import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalType, Product } from 'src/app/interfaces/product';

import { ProductItemComponent } from './product-item.component';

const product: Product = {
name:"Product",
description: "Product",
value: 204.9,
promotional_value: 184.41,
featured_image: "image_url",
images: [],
videos: [],
rating_stars: 0.5,
rating_count: 424,
installment_available: true,
installment_count: 2,
featured: true,
category: "Medicina e Sa\u0fade",
subcategory: "Antipulgas e carrapatos",
animal_type: AnimalType.Dog,
url: "/url",
created_at: "2021-04-12 21:28:35.81119+00:00",
id:"EJf7MMU4hES59rlLMJrdH"
}
describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
