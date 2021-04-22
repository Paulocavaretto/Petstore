import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from './../../services/categories.service';



@Component({
  selector: 'app-categories-featured',
  templateUrl: './categories-featured.component.html',
  styleUrls: ['./categories-featured.component.scss']
})
export class CategoriesFeaturedComponent implements OnInit {
  
  categories!: Category[];

  constructor(public categoriesService: CategoriesService){} 
  ngOnInit(): void {
   this.categoriesService.getCategories().subscribe(categories => this.categories = categories);
}
}