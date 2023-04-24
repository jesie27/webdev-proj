import axios from "axios";
const USERS_API_URL = "http://localhost:4000/api/users";

const api = axios.create({
    withCredentials: true
})
export const findAllUsers = async () => {
    const response = await axios.get (USERS_API_URL);
    return response.data;
}
export const findUserById = async (id) => {
    const response = await axios.get(`${USERS_API_URL}/userId/${id}`);
    return response.data;
}

export const createUser = async (user) => {
    return axios.post(USERS_API_URL, user);
}

export const updateUser = async (newUser) => {
    console.log(newUser);
    return await axios.put(`${USERS_API_URL}/${newUser._id}`, newUser);
}
export const deleteUser = async (id) => {
    return axios.delete(`${USERS_API_URL}/${id}`);
}
export const login = (user) => {
    return api.post(`${USERS_API_URL}/login`, user);
}

export const logout = async () => {
    return api.post(`${USERS_API_URL}/logout `)
}

export const register = (user) => {
    return api.post(`${USERS_API_URL}/register`, user);
}

export const profile = async () => {
    return api.get(`${USERS_API_URL}/profile`);
}
export const editProfile = async (user) => {
    return axios.get(`${USERS_API_URL}/edit-profile`, user);
}