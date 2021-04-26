import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { SwiperOptions } from 'swiper/types/swiper-options';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  @Input() productInstallment: String = '';

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProduct();
    }

    getProduct(): void {
      const id = this.route.snapshot.paramMap.get('id');
      this.productService.getProduct(`${id}`)
    .subscribe(Products => this.product = Products)
    };

    public swiperConfig: SwiperOptions = {
      direction: 'horizontal', // Aqui definimos a direção que o slide deve seguir "horizontal" ou "vertical"
      keyboard: true, // Aqui definimos se o slide passará as fotos caso pressionarmos as setas do teclado, caso seja falso esse comportamento não acontecerá
      grabCursor: true, // Aqui ao passar o mouse no slide, será trocado o cursor, permitindo arrastar para o próximo slide
      pagination: { el: '.swiper-pagination', clickable: true, } // Aqui definimos a paginação dele, no caso são as bolinhas que ficam na parte inferior do slide
  };

  

}
