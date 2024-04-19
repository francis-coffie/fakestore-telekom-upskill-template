import { Component} from '@angular/core';
import { Product, ProductsService } from './products.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productsList: Product[]=[];
  constructor(private getproductService: ProductsService) { }
  ngOnInit() {
    this.getproductService.getProducts().subscribe((Response) => {
      this.productsList = Response as Product[];
      
    });
    
  }
}