import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 3d88026776eb1e2c1a99d700ba790ab5d939bb64e9997069f4d95adf46067cfc",
  },
});
