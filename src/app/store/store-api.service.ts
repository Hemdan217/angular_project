import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IProduct } from './../models/iproduct';
import { IBrand } from './../models/ibrand';
import { ICategory } from '../models/icategory';
@Injectable({
  providedIn: 'root',
})
export class StoreApiService {
  constructor(private httpclient: HttpClient) {}

  getAllProducts(
    page: number,
    brand: string,
    category: string,
    keyword: string,
    limit: number = 12
  ): Observable<IProduct[]> {
    let query = '';
    query += '_page=' + page;
    query += '&_limit=' + limit;
    if (brand) query += '&description.Brand=' + brand;
    if (category) query += '&category=' + category;
    if (keyword) query += '&name_like=' + keyword;
    console.log(query);
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products?${query}`
    );
  }

  getProduct(pID: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(
      `${environment.baseAPIURL}/products/${pID}`
    );
  }

  createProduct(product: IProduct): Observable<IProduct[]> {
    return this.httpclient.post<IProduct[]>(
      `${environment.baseAPIURL}/products`,
      product
    );
  }

  updateProduct(pID: number, product: IProduct): Observable<IProduct[]> {
    return this.httpclient.patch<IProduct[]>(
      `${environment.baseAPIURL}/products/${pID}`,
      JSON.stringify(product),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }

  deleteProduct(pID: number): Observable<IProduct[]> {
    return this.httpclient.delete<IProduct[]>(
      `${environment.baseAPIURL}/products/${pID}`
    );
  }

  getProductsByCategory(category: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products?category=${category}`
    );
  }
  getProductsByBrand(brand: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products?description.Brand=${brand}`
    );
  }

  searchForProducts(value: string): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products?name_like=${value}`
    );
  }

  sortByPrice(value: string): Observable<IProduct[]> {
    let orderBy = value == 'down' ? 'desc' : 'asc';
    return this.httpclient.get<IProduct[]>(
      `${environment.baseAPIURL}/products/?_sort=price&_order=${orderBy}`
    );
  }

  getAllBrands(): Observable<IBrand[]> {
    return this.httpclient.get<IBrand[]>(`${environment.baseAPIURL}/brands`);
  }
  getAllCategories(): Observable<ICategory[]> {
    return this.httpclient.get<ICategory[]>(
      `${environment.baseAPIURL}/categories`
    );
  }
  /// Add New Product

  /// Edit Product

  /// Delete Product
}
