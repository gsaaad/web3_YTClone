// importing axios
import axios from "axios";
// require("dotenv").config();

const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append("file", file);

  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDUwN0Q0Q0E5YmU4ZjU1NjI0MzczRTdDNDI1NjlmNEMxM0ZDRTU1ZDMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYwMjAxMTIwODUsIm5hbWUiOiJ5dENsb25lIn0.5iOcvyrpJiGMBqMCqC-Ngcxo91y0p_vs9ivEmuLiM0w`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
