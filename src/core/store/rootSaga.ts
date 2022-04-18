import { all } from 'redux-saga/effects';

import { helloSaga, watchGetProduct } from '../../modules/example/exampleSlice';

export default function* rootSaga(): any {
  yield all([helloSaga(), watchGetProduct()]);
}
