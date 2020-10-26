const axios = require("axios");

const url = "https://covid19.mathdro.id/api";

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
