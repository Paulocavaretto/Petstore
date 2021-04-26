import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoriesServiceMock } from 'src/app/mocks/categories-mocks';

import { CategoriesFeaturedComponent } from './categories-featured.component';

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;
  let h2: HTMLElement;
  let p: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesFeaturedComponent,],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMock
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
    fixture.detectChanges();
    h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Categorias em destaque');
    });

    it('should check category card item count in HTML', () => {
      const html = fixture.nativeElement;
      // Eu coloquei uma classe na div referente a cada item de categoria, por isso consegui obter pela classe
      expect(html.getElementsByClassName('category-item').length).toEqual(2);
  });
    it('shoud show first component in HTML', ()=>{
      fixture.detectChanges();
      p = fixture.nativeElement.querySelector('p');
      expect(p.textContent).toContain('ração');

    })
    
});


 
