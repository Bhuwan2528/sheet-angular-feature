
import { Component, OnInit, signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class ShopComponent implements OnInit {

  products = signal<Product[]>([]);

  loading = signal(true);

  errorMessage = signal('');

  isSidebarOpen = signal(false);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    console.log('Shop component initialized');

    this.productService.getProducts().subscribe({

      next: (data) => {

        console.log('API DATA RECEIVED:', data);

        if (Array.isArray(data)) {
          this.products.set(data);
        } else {
          this.errorMessage.set('Invalid product data received.');
        }

        this.loading.set(false);

        console.log('Products Loaded:', this.products().length);

      },

      error: (error) => {

        console.error('API ERROR:', error);

        this.errorMessage.set('Unable to load products. Please try again.');

        this.loading.set(false);

      }

    });

  }

  toggleSidebar(): void {
    this.isSidebarOpen.update(value => !value);
  }

  closeSidebar(): void {
    this.isSidebarOpen.set(false);
  }

}
