import { createAction, props } from '@ngrx/store';
import { ProductDetail } from 'src/app/models/Product/Product';

export const UPDATE_PRODUCTS = '[UPDATE_PRODUCTS] ProductDetail';
export const SET_PRODUCTS = '[SET_PRODUCTS] ProductDetail[]';

export const updateProducts = createAction(
  UPDATE_PRODUCTS,
  props<ProductDetail>()
);
export const setProducts = createAction(
  SET_PRODUCTS,
  props<{ productDetails: ProductDetail[] }>()
);
