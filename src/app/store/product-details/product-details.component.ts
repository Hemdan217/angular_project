import { Component, OnInit } from '@angular/core';
import { IProduct } from './../../models/iproduct';
import { StoreApiService } from '../store-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: undefined | IProduct = undefined;
  id: number = 0;
  constructor(
    private store: StoreApiService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      this.id = paramMap.get('proId') ? Number(paramMap.get('proId')) : 0;
      this.store.getProduct(this.id).subscribe({
        next: (value) => {
          this.product = value;
        },
        error: (err) => {
          this.router.navigate(['/**']);
        },
      });
    });
  }
}
