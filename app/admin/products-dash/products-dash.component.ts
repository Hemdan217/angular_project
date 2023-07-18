import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { AdminService } from '../admin.service';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';
import { EditProductComponent } from './editProduct/editProduct.component';
@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.css'],
})
export class ProductsDashComponent implements OnInit {
  allProducts = [] as IProduct[];
  constructor(private admin: AdminService, public dialogModel: MatDialog) {}
  ngOnInit(): void {
    this.loadData();
  }
  edit(product: IProduct) {
    // this.admin.editProduct(id).subscribe(() => {
    //   this.loadData();
    // });
    const dialogWithForm = this.dialogModel.open(EditProductComponent, {
      restoreFocus: true,
      width: '600px',
      data: product,
    });
    dialogWithForm.afterClosed().subscribe((result) => {
      this.loadData();
    });
  }

  remove(id: number) {
    this.admin.deleteProduct(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this.admin.getAllProducts().subscribe((data) => {
      this.allProducts = data;
    });
  }
}
