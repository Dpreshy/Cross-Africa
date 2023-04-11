import axios from "axios";
const baseURL = "http://localhost:5000/api";

export const createUser = async({fullName,lastName,email,companyName, phoneNum, password}) => {
    await axios.post(`${baseURL}/seler/register`, { fullName, lastName, email, companyName, phoneNum, password }).then(res => {
        console.log(res);
    })
}

export const logInUser = async({email,password}) => {
    await axios.post(`${baseURL}/seler/login`, { email, password }).then(res => {
        res.message;
        console.log(res.data.token)
        alert(res.data.token)
    });
}