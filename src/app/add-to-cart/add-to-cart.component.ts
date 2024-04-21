import { Component } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
  cartItems: any[] = [];

  constructor() { }

  addToCart(item: any) {
    this.cartItems.push(item);
  }

  getCartItems() {
    return this.cartItems;
  }
}
