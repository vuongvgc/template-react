import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';

import { exampleReducer } from '../../modules/example/exampleSlice';
import { settingReducer } from '../../modules/setting/settingSlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    example: exampleReducer,
    setting: settingReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware, logger),
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
