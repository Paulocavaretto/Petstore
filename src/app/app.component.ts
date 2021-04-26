import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent {

  constructor(private router:Router){}
  title = 'PetStore';
  menus = [
    {'name': 'home', 'router': '/' },
    {'name': 'contato', 'router': '/contact' },
    { 'name': 'Produtos', 'router': '/products' },
  ];

  showPage(pageName:string, sidenav:MatSidenav){
    this.router.navigate([pageName]);
    sidenav.close();
  }
}
