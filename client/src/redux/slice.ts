import { createSelector } from 'reselect'

const currentUserSelector = createSelector(
    (state: any) => state.currentUser,
    (currentUser) => currentUser.user
  )

export default currentUserSelector;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import CurrentUserInterface from '../interface'
// import rootReducer from './reducers'
// import currentUser from './reducers/reducer1'
// import { RootState } from './store'

// export const initialState: CurrentUserInterface = {
// 	auth: false,
// 	userName: '',
//   uid: '',
//   loading: true,
// }

// export const counterSlice = createSlice({
//   name: 'currentUser',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     currentUser
//   }
// })

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.currentUser

// export default counterSlice.reducer