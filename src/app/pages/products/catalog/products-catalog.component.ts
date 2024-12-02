import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../../core/interfaces/product.interface';
import { ProductService } from '../../../core/services/product.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'products-catalog',
  standalone: true,
  imports: [RouterModule, CommonModule, HttpClientModule, FormsModule],
  templateUrl: './products-catalog.component.html',
})
export class ProductsCatalogComponent {

  categories: string[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  searchQuery: string = '';
  selectedCategory: string = 'Todos';
  currentPage: number = 1;
  itemsPerPage: number = 6;
  pages: number[] = [];

  constructor(private fakeStoreService: ProductService) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadAllProducts();
  }

  loadCategories(): void {
    this.fakeStoreService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  loadAllProducts(): void {
    this.fakeStoreService.getAllProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
      this.paginateProducts();
    });
  }

  loadProductsByCategory(category: string): void {
    if (category === 'Todos') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category);
    }
    this.currentPage = 1;
    this.paginateProducts();
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
    this.searchQuery = ''; // Clear search when selecting a category
    this.loadProductsByCategory(category);
  }

  searchProducts(): void {
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.selectedCategory = 'Resultados de búsqueda';
    this.currentPage = 1;
    this.paginateProducts();
  }

  paginateProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(start, end);
    this.pages = Array.from(
      { length: Math.ceil(this.filteredProducts.length / this.itemsPerPage) },
      (_, i) => i + 1
    );
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.paginateProducts();
  }
}
