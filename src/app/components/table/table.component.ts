import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { openModal } from 'src/app/store/actions/ModalActions';
import { ProductDetail } from 'src/app/models/Product/Product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  currentProductDetail!: ProductDetail;

  constructor(private store: Store<any>) {}

  products$: ProductDetail[] | [] = [];

  ngOnInit(): void {
    this.store.select('product').subscribe((data: ProductDetail[]) => {
      this.products$ = [...data];
    });
  }

  handleClick(data: ProductDetail) {
    this.currentProductDetail = data;
    this.store.dispatch(openModal());
  }
}
