import { createSelector } from 'reselect'

const currentUserSelector = createSelector(
    (state: any) => state.currentUser,
    (currentUser) => currentUser.activeBook
  )

export default currentUserSelector;