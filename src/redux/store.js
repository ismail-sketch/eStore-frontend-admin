import { configureStore } from '@reduxjs/toolkit'
import regSlice from './regAuth/regAuthSlice.js'



export const store = configureStore({
  reducer: {
    regSlice,
  },
  devTools: true
})