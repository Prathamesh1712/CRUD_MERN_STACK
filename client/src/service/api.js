import axios from "axios";

const usersUrl = "http://localhost:8800";
export const addUser = async (data) => {
  try {
    await axios.post(`${usersUrl}/add`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    return await axios.get(`${usersUrl}/all`);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${usersUrl}/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${usersUrl}/${id}`, user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${usersUrl}/${id}`);
  } catch (error) {
    console.log(error);
  }
};
