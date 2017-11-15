import axios from "axios";

export default axios.create({
  baseURL: "http://findcare.000webhostapp.com/",
  headers: {
    "Content-Type": "multipart/form-data"
  }
});
