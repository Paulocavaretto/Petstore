import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import{MatSidenavModule} from '@angular/material/sidenav';
import{MatIconModule}  from '@angular/material/icon';
import{MatToolbarModule,MatToolbarRow} from '@angular/material/toolbar';
import{HttpClientModule}  from '@angular/common/http';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { ProductItemComponent } from './components/product-item/product-item.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent,
    ProductItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
