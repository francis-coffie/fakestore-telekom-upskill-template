import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product, ProductsService } from '../products.service';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
  
})

export class ProductDetailComponent {
  productDetail: Product | undefined;
  constructor(
    private route: ActivatedRoute,
   private getproductService: ProductsService,
  ) {}

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id')!; 
      this.loadProductDetails(productId);
      this.getproductService.getProducts("/"+productId).subscribe((Response) => {
        this.productDetail = Response as Product;
        
      });
    });
  }

   loadProductDetails(productId: number): void {
    console.log("hello", productId)

  }


}