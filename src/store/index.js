import { configureStore } from '@reduxjs/toolkit'
import authReducer from '/src/store/slice/auth'
import usersReducer from '/src/store/slice/users'
import modalReducer from '/src/store/slice/modal'
import messageSlice from '/src/store/slice/chat'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    users: usersReducer,
    message: messageSlice
  }
})
