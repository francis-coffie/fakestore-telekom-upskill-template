import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


export interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }
  getProducts(endPoint=""): Observable<Product[] | Product> {
    return this.http.get<Product[]>(this.apiUrl+endPoint);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}

