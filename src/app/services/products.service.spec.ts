import { TestBed, ɵTestingCompiler } from '@angular/core/testing';
import {HttpTestingController,HttpClientTestingModule} from '@angular/common/http/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    
  });
    

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});