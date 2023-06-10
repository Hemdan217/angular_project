import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProduct } from './../../models/iproduct';
import { StoreApiService } from '../store-api.service';
import { IBrand } from '../../models/ibrand';
import { ICategory } from '../../models/icategory';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('search') searchTerm?: ElementRef;
  Products: IProduct[] = [];
  brands: IBrand[] = [];
  categories: ICategory[] = [];
  _page: number = 0;
  _brandSearch: string = '';
  _categorySearch: string = '';
  _keyword: string = '';
  get page(): number {
    return this._page;
  }
  get brandSearch(): string {
    return this._brandSearch;
  }
  get keyword(): string {
    return this._keyword;
  }
  get categorySearch(): string {
    return this._categorySearch;
  }
  setBrandSearch(s: string) {
    this._brandSearch = s;
    this._categorySearch = '';
    this.resetSearch();
  }
  setCategorySearch(s: string) {
    this._categorySearch = s;
    this._brandSearch = '';
    this.resetSearch();
  }
  setKeyword(s: string) {
    this._keyword = this.searchTerm?.nativeElement.value;
    this._categorySearch = '';
    this._brandSearch = '';
    this.resetSearch();
  }
  reset() {
    this._keyword = '';
    this._categorySearch = '';
    this._brandSearch = '';
    this.resetSearch();
  }

  resetSearch() {
    this._page = 1;
    this.loadProducts();
    this.router.navigate(['/products'], { queryParams: { page: this._page } });
  }

  constructor(
    private store: StoreApiService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ojpfdijfifn');
    this.activateRoute.queryParamMap.subscribe((params) => {
      this._page = params.get('page') ? Number(params.get('page')) : 1;
      this.loadProducts();
      this.loadBrands();
      this.loadCategories();
    });
  }

  loadProducts() {
    this.store
      .getAllProducts(
        this._page,
        this._brandSearch,
        this._categorySearch,
        this._keyword
      )
      .subscribe((data: IProduct[]) => {
        this.Products = data;
      });
  }
  loadBrands() {
    this.store.getAllBrands().subscribe((data: IBrand[]) => {
      this.brands = data;
    });
  }
  loadCategories() {
    this.store.getAllCategories().subscribe((data: ICategory[]) => {
      this.categories = data;
    });
  }
  goBack() {
    this._page -= 1;
    this.loadProducts();
    this.router.navigate(['/products'], { queryParams: { page: this._page } });
  }
  goNext() {
    this._page += 1;
    this.loadProducts();
    this.router.navigate(['/products'], { queryParams: { page: this._page } });
  }
}
