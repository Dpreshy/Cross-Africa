import axios from "axios";
const baseURL = "http://localhost:5000";

export const sellerProducts = async (id) => {
    // console.log(id);
    const response = await axios.get(`${baseURL}/api/product/${id}/seller`)

    return response.data.data
}