import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

function Example() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div
      style={{
        padding: "0px 12px ",
        background: "#F5F5F5",
        margin: "42px 192px",
        borderRadius: "14px",
      }}
    >
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div>
            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-5  text-sm grid-cols-1 md:grid-cols-5">
                <div class="md:col-span-5">
                  <label for="full_name">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="email">Mobile Number</label>
                  <input
                    type="number"
                    name="email"
                    id="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div class="md:col-span-3">
                  <label for="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="email@domain.com"
                  />
                </div>

                <div class="md:col-span-5">
                  <label for="address">Address / Street</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  />
                </div>

                <div class="md:col-span-2">
                  <label for="country">State</label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="country"
                      id="country"
                      placeholder="State"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-2">
                  <label for="state">City </label>
                  <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                    <input
                      name="state"
                      id="state"
                      placeholder="City"
                      class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                    />
                    <button
                      tabindex="-1"
                      class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                    <button
                      tabindex="-1"
                      for="show_more"
                      class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                    >
                      <svg
                        class="w-4 h-4 mx-2 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="md:col-span-1">
                  <label for="zipcode">Zipcode</label>
                  <input
                    type="number"
                    name="zipcode"
                    id="zipcode"
                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  />
                </div>
                {/* 
                <div class="md:col-span-5">
                  <label for="zipcode">Upload Adhar</label>
                  <input
                    type="file"
                    name="zipcode"
                    id="zipcode"
                    class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder=""
                  />
                </div> */}

                <div class="md:col-span-2">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Upload Adhar
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div class="md:col-span-2">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Upload PAN Card
                  </label>

                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div class="md:col-span-1">
                  <label
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="file_input"
                  >
                    Upload Photo
                  </label>
                  <input
                    class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    id="file_input"
                    type="file"
                  />
                </div>
                <div class="md:col-span-2">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Any Medical Isuues
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Any Medical Issues"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div class="md:col-span-5 mt-8">
                  <div class="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="billing_same"
                      id="billing_same"
                      class="form-checkbox"
                    />
                    <label for="billing_same" class="ml-2">
                      Im Agree with Terms And Conditions
                    </label>
                  </div>
                </div>

                <div class="md:col-span-5 text-right">
                  <div class="inline-flex items-end">
                    <button class="bg-red-500 hover:bg-rde-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
