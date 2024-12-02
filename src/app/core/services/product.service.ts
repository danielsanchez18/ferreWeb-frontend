import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private API_URL = 'https://fakestoreapi.com';

  private http = inject(HttpClient);

  // Obtener todos los productos
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/products`);
  }

  // Obtener un producto por su ID
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/products/${id}`);
  }

  // Obtener productos por categoría
  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/products/category/${category}`);
  }

  // Obtener categorías disponibles
  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.API_URL}/products/categories`);
  }

}
