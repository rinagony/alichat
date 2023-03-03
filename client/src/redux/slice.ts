import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import CurrentUserInterface from '../interface'

const initialState: CurrentUserInterface = {
  auth: false,
  userName: '',
  uid: '',
  loading: true,
}
export const currentUser = createSlice({
  name: 'currentUser',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUserInterface>) => {
      state.auth = action.payload.auth;
      state.loading = action.payload.loading;
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
    },
  },
})

export const { setCurrentUser } = currentUser.actions

// Other code such as selectors can use the imported `RootState` type
export const selectorCurrentUser = (state: RootState) => state.currentUser

export default currentUser.reducer