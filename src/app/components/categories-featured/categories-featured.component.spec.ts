import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryServiceMock } from 'src/app/mocks/categories-mocks';
import { CategoriesService } from 'src/app/services/categories.service';

import { CategoriesFeaturedComponent } from './categories-featured.component';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFeaturedComponent ],
      providers: [ 
        {
          provide: CategoriesService,
          useClass: CategoryServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show component title in html', () => {
    expect(document.getElementsByClassName('categoria.name').length).toEqual(0);
  });
  it('should check category card item count in HTML', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-item').length).toEqual(2);
});
});

 