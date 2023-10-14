import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../Utils/baseUrl";
const initialState = {
  booking: "",
  user: [],
};

export const fetchDetails = createAsyncThunk("users", async () => {
  const response = await axios.get(`${BaseUrl}booking`);
  console.log(response);
  return response.data;
});
export const postDetails = createAsyncThunk("userspost", async (payload) => {
  const response = await axios.post(`${BaseUrl}booking`, payload);
  console.log(response);
  return response.data;
});
export const updateDetails = createAsyncThunk(
  "usersupdate",
  async (payload) => {
    const response = await axios.put(
      `${BaseUrl}booking/${payload._id}`,
      payload
    );

    return response.data;
  }
);
export const delDetails = createAsyncThunk("usersdelete", async (_id) => {
  const response = await axios.delete(`${BaseUrl}booking/${_id}`);

  return response.data;
});
export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(postDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(delDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default bookingSlice.reducer;
