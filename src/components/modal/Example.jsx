import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { uploadDoc } from "../../Utils/uploadDoc";
import { useFormik } from "formik";
import "./index.css";
import swal from "sweetalert";
import { postDetails } from "../../features/bookingSlice";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
function Example() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      address: "",
      state: "",
      city: "",
      pin: "",
      adhar: "s",
      pan: "s",
      photo: "s",
      medical: "",
      room: "",
    },
    onSubmit: (values) => {
      try {
        dispatch(postDetails(values))
          .then(unwrapResult)
          .then(() => {
            swal("Success", "Booking Succesfully!", "success");
            formik.resetForm();
          });
      } catch (error) {
        swal("Oops", "Something went wrong!", "error");
      }
    },
  });

  const handleimgChange = async (e, field) => {
    const file = [e.target.files[0]];
    try {
      const res = await uploadDoc(file);
      formik.setFieldValue(field, res[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleroom = (e) => {
    formik.setFieldValue("room", e.target.value);
  };

  const handleMedicalChange = (event) => {
    formik.setFieldValue("medical", event.target.value);
  };
  return (
    <div className="modalform"
      style={{
     
        background: "#F5F5F5",
      
        borderRadius: "14px",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        className="min-h-screen p-1 md:p-6 bg-gray-100 flex items-center justify-center"
      >
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-5  text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label for="full_name">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    className="h-10 border mt-1 rounded px-1 w-full bg-gray-50"
                  />
                </div>

                <div className="md:col-span-2">
                  <label for="email">Mobile Number</label>
                  <input
                    type="number"
                    name="number"
                    onChange={formik.handleChange}
                    value={formik.values.number}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="md:col-span-3">
                  <label for="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="email@domain.com"
                  />
                </div>

                <div className="md:col-span-5">
                  <label for="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Enter Address"
                  />
                </div>

                <div className="md:col-span-2">
                  <label for="country">State</label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      onChange={formik.handleChange}
                      value={formik.values.state}
                      placeholder="State"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label for="state">City </label>
                  <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="city"
                      onChange={formik.handleChange}
                      value={formik.values.city}
                      placeholder="City"
                      className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    />
                  </div>
                </div>

                <div className="md:col-span-1">
                  <label for="zipcode">Pincode</label>
                  <input
                    type="number"
                    name="pin"
                    onChange={formik.handleChange}
                    value={formik.values.pin}
                    className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  />
                </div>

                <div className="md:col-span-3">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    for="file_input"
                  >
                    Upload Adhar
                  </label>
                  <input
                    className="form-control"
                    id="file_input"
                    name="adhar"
                    onChange={(e) => handleimgChange(e, "adhar")}
                    type="file"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                    for="file_input"
                  >
                    Upload PAN Card
                  </label>

                  <input
                    className="form-control"
                    id="file-upload-button"
                    type="file"
                    name="pan"
                    onChange={(e) => handleimgChange(e, "pan")}
                  />
                </div>
                <div className="md:col-span-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-900"
                    for="file_input"
                  >
                    Upload Photo
                  </label>
                  <input
                    className="form-control"
                    name="photo"
                    onChange={(e) => handleimgChange(e, "photo")}
                    id="file_input"
                    type="file"
                  />
                </div>
                <div className="md:col-span-2">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Any Medical Isuues
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formik.values.medical}
                      label="Any Medical Issues"
                      onChange={handleMedicalChange}
                    >
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className="md:col-span-2">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Book Room
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={formik.values.room}
                      label="Any Medical Issues"
                      onChange={handleroom}
                    >
                      <MenuItem value={"single"}>Single Occupancy</MenuItem>
                      <MenuItem value={"double"}>Double Occupancy</MenuItem>
                      <MenuItem value={"triple"}>Triple Occupancy</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="md:col-span-5 mt-8">
                  <div className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      className="form-checkbox"
                    />
                    <label for="billing_same" className="ml-2">
                      Im Agree with Terms And Conditions
                    </label>
                  </div>
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button
                      type="submit"
                      className="bg-red-500 hover:bg-rde-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Example;
