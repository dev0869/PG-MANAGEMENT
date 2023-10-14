import { configureStore } from '@reduxjs/toolkit'
import bookingSlice from '../features/bookingSlice'
export const store = configureStore({
    reducer: {
      booking:bookingSlice
  },
})