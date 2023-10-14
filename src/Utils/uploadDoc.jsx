import axios from "axios";


export const uploadDoc = async (data) => {
  const formData = new FormData();
  data.forEach((file) => {
    formData.append("file", file);
  });
  try {
    const res = await axios.post(
      "https://images.deepmart.shop/upload",
      formData
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
