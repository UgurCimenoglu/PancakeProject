import { createAction, props } from '@ngrx/store';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
