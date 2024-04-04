import axios from "axios";

const baseURL = "http://localhost:3001/locations";

export const getLocations = async () => {
  const response = await axios.get(baseURL);
  return response.data;
};

export const postLocation = async ({ name, country }) => {
  const response = await axios.post(baseURL, { name, country });
  return response.data;
};

export const deleteLocation = async ({ id }) => {
  console.log(id, "FROM AXIOS FUNCTION");
  const response = await axios.post(`${baseURL}/location/${id}`);
  return response.data;
};
