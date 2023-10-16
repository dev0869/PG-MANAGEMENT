import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    filter:'',
}
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        RoomFilter: (state, action) => {
            state.filter=action.payload
        }
    }
})
export const { RoomFilter } = filterSlice.actions;
export default filterSlice.reducer;
