import { createReducer, on } from '@ngrx/store';
import { ProductDetail } from 'src/app/models/Product/Product';
import { updateProducts, setProducts } from '../actions/ProductActions';

export const initialProductState: ProductDetail[] = [];

export const productReducer = createReducer(
  initialProductState,
  on(updateProducts, (state, payload) => {
    console.log(state, payload);
    const newState: ProductDetail[] = state.map((prd: ProductDetail) => {
      return prd.id === payload.id
        ? {
            ...prd,
            description: payload.description,
            sales: payload.sales,
          }
        : prd;
    });

    return [...newState];
  }),
  on(setProducts, (state, payload) => {
    return [...payload.productDetails];
  })
);
