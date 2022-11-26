import { createReducer, on } from '@ngrx/store';
import { openModal, closeModal } from '../actions/ModalActions';

type initialState = {
  isVisible: boolean;
};

export const initialModalState: initialState = {
  isVisible: false,
};

export const modalReducer = createReducer(
  initialModalState,
  on(openModal, (state) => ({
    isVisible: true,
  })),
  on(closeModal, (state) => ({
    isVisible: false,
  }))
);
