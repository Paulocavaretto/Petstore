import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCard } from '@angular/material/card';
import { MockComponents } from 'ng-mocks';
import { ParametersServiceMock } from 'src/app/mocks/parameters-mock';
import { ParametersService } from 'src/app/services/parameters.service';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent,
        MockComponents(
          MatCard  
        ),
      ],

      providers: [{
        provide: ParametersService,
        useClass: ParametersServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


it('should create', () => {
    expect(component).toBeTruthy();
  });

it('should verify if the social-medias links works', () => {
    const html = fixture.nativeElement;
    const links=document.getElementsByClassName("social-midia");
    expect(links.length).toEqual(4);
});

it('shold verify if all the images work' ,()=>{
  const html=fixture.nativeElement;
  const images=document.getElementsByTagName('img');
  expect(images.length).toEqual(6);
});

it('shold verify if the trademark work' ,()=>{
  const html=fixture.nativeElement;
  const marca=html.querySelector('.trademark');
  expect(marca.textContent.trim()).toEqual('@Petstore');
});

});

