import { Component } from '@angular/core';
import { Product, ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productsList: Product[]=[];
  constructor(private getproductService: ProductsService) { }
  ngOnInit() {
    this.getproductService.getProducts().subscribe((Response) => {
      this.productsList = Response as Product[];      
    });
    
  }
}
