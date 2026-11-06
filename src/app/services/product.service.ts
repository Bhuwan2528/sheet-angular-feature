
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnTXIr00uZX02DJfn0NGUBW73erqiCSI40mtc6eeOtVQ87zPkyA-AyHX6WmQDS2t_HmIe6AqBYLYmhNkdNXXzYEQp-xW4Cc4tqyPlL1kHJeL_v0l3wi3uk7IjwKvmdvf9hgEOcM5NYW2vwytsxVJP67LqM8jM9K-Lkx3xTTEGZe6_x4vKsiHAZCOgBF6hhfmwP4ihGqLry7H-fCVeenoyWITr0SwW6qQUS1Ywwamv-UrlzyEmum9ikkyy4bUZwQey7EfdmcmU6s6DdCIna9dTeXeSpwp0A&lib=MIt-YP5ZpL1O3wjnT3vo6WF6OkEJPB7WZ';

  private products$?: Observable<Product[]>;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {

    if (!this.products$) {

      this.products$ = this.http
        .get<Product[]>(this.apiUrl)
        .pipe(
          shareReplay(1)
        );

    }

    return this.products$;
  }
}
