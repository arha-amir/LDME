import axios from "axios";

const url = "http://localhost:5000";
export const addUser = async (customerData) => {
  return await axios.post(`${url}/SignIn`, customerData);
};
