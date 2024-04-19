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
   private getproductService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = +params.get('id')!; // `+` converts string to number, `!` is for non-null assertion
      this.loadProductDetails(productId);

      this.getproductService.getProducts("/"+productId).subscribe((Response) => {
        this.productDetail = Response as Product;
        console.log("TTTTT", Response);
        
      });
    });
  }

   loadProductDetails(productId: number): void {
    console.log("hello", productId)

  }
}