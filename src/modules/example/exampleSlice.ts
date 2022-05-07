import { call, put, takeEvery } from 'redux-saga/effects';

import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';

import api from '../../core/api/api';

export interface ICounterState {
  value: number;
  productList: any;
}
const initialState: ICounterState = {
  value: 0,
  productList: [],
};

export const counterSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    increment: state => ({ ...state, value: state.value + 1 }),
    decrement: state => ({ ...state, value: state.value - 1 }),
    incrementByAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      value: action.payload,
    }),
    productList: (state, action: PayloadAction<any>) => ({ ...state, productList: action.payload }),
  },
});
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, productList } = counterSlice.actions;

export const exampleReducer = counterSlice.reducer;

export const getProductsAsync = createAction('example/getProducts');

export function* getProductsSaga(): any {
  const product = yield call(() => api.get('products'));
  yield put(productList(product.data));
}
export function* watchGetProduct(): any {
  console.debug('run');
  yield takeEvery(getProductsAsync, getProductsSaga);
}

export function* helloSaga(): Generator<any, void, unknown> {
  yield console.debug('Run hello Saga');
}
