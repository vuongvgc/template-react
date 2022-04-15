import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';

import exampleReducer from '../modules/example/exampleSlice';
import settingReducer from '../modules/setting/settingSlice';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    example: exampleReducer,
    setting: settingReducer,
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware, logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export function* helloSaga(): Generator<any, void, unknown> {
  yield console.debug('Run');
}
sagaMiddleware.run(helloSaga);
