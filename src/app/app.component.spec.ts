import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import{MatToolbar,MatToolbarRow}from '@angular/material/toolbar';
import{MatSidenav,MatSidenavContent,MatSidenavContainer}from '@angular/material/sidenav';
import { MockComponents } from 'ng-mocks';



describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations:[
        AppComponent,
        MockComponents(
        MatToolbar,
        MatSidenav,
        MatSidenavContent,
        MatSidenavContainer,
        MatIcon
)
        

      ],

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Petstore'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Petstore');
  });

    it ('should render title in mat-toolbar ',() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; 
    expect(compiled.querySelector('mat-sidenav-content span').textContent).toContain('Petstore');
});

 

  });