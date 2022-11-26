import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { closeModal } from 'src/app/store/actions/ModalActions';
import { updateProducts } from 'src/app/store/actions/ProductActions';
import { ProductDetail } from 'src/app/models/Product/Product';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  constructor(private store: Store<any>, private fb: UntypedFormBuilder) {}

  @Input()
  currentProductDetail!: ProductDetail;
  validateForm!: UntypedFormGroup;

  isVisible!: boolean;

  ngOnInit(): void {
    this.store.select('modal').subscribe((modal) => {
      this.isVisible = modal.isVisible;
    });
    this.validateForm = this.fb.group({
      sales: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  handleOk(): void {
    if (this.validateForm.valid) {
      this.store.dispatch(closeModal());
      console.log('submit', this.validateForm.value);
      this.store.dispatch(
        updateProducts({
          ...this.currentProductDetail,
          ...this.validateForm.value,
        })
      );
      this.validateForm.reset();
    }
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
}
