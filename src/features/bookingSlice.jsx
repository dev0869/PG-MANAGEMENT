import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BaseUrl } from "../Utils/baseUrl";
import swal from "sweetalert";
const initialState = {
  contact: [],
  user: [],
};

export const fetchDetails = createAsyncThunk("users", async () => {
  const response = await axios.get(`${BaseUrl}booking`);

  return response.data;
});
export const fetchContact = createAsyncThunk("contact", async () => {
  const response = await axios.get(`${BaseUrl}contact`);

  return response.data;
});
export const postContact = createAsyncThunk("userscontact", async (payload) => {
  try {
    const res = await axios.post(`${BaseUrl}contact`, payload);

    return res.data;
  } catch (error) {
    console.log(error.response.data);
  }
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
export const delContact = createAsyncThunk("conatctDelete", async (_id) => {
  const response = await axios.delete(`${BaseUrl}contact/${_id}`);

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
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.contact = action.payload;
      })
      .addCase(postContact.fulfilled, (state, action) => {
        state.contact = action.payload;
      })
      .addCase(postContact.rejected, (state, action) => {
        console.log(action.payload);
      })
      .addCase(postDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(delDetails.fulfilled, (state, action) => {
    
      })
      .addCase(delContact.fulfilled, (state, action) => {
        state.contact = action.payload;
      });
  },
});

export default bookingSlice.reducer;
