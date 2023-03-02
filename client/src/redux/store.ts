import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from "redux-thunk";
import { applyMiddleware } from 'redux';

export const store = configureStore({
  reducer: {
    currentUser: rootReducer
  },
  middleware:[thunk],
},)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch