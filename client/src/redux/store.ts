import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slice'
import thunkMiddleware from 'redux-thunk'
export const store = configureStore({
  reducer: {
    currentUser: dataReducer,
  },
  middleware: [thunkMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch