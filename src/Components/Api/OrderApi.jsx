import axios from "axios";
const baseURL = "http://localhost:5000";

export const orders = async (id) => {
    // console.log(id);
    const response = await axios.get(`${baseURL}/api/order`)

    return response.data.data
}