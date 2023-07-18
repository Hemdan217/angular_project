import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ProductsDashComponent } from '../products-dash.component';
import { IProduct } from '../../../models/iproduct';
@Component({
  selector: 'app-editProduct',
  templateUrl: './editProduct.component.html',
  styleUrls: ['./editProduct.component.css'],
})
export class EditProductComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductsDashComponent>,
    @Inject(MAT_DIALOG_DATA) public product: IProduct
  ) {}

  close(): void {
    this.dialogRef.close();
  }
  save() {
    console.log(this.product);
    this.close();
  }
}
