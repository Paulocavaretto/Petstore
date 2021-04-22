import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import {ProductsService} from 'src/app/services/products.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  products!: Product[];


  constructor (private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsHighlights();
  } 

  getProductsHighlights():void{
  this.productsService.getProductsHighlights()
  .subscribe(products => this.products = products)
  }


}
