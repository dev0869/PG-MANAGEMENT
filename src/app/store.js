import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from '../features/bookingSlice'
import filterSlice from '../features/filterSlice'
export const store = configureStore({
    reducer: {
    booking: bookingSlice,
      filter:filterSlice
  },
})