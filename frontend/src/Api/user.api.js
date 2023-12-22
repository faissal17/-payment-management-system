import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 8000,
});
export const getAllUser = async () => {
  try {
    const response = await userApi.get("/user");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("failed to fetch");
    }
  } catch (error) {
    console.error("Error frtching in:", error);
    throw error;
  }
};
export const deleteUser = async (userId) => {
  try {
    const response = await userApi.delete(`/user/${userId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("failed to Delete");
    }
  } catch (error) {
    console.error("Error Deleting in:", error);
    throw error;
  }
};
export const createUser = async (userData) => {
  try {
    const response = await userApi.post("/user", userData);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Failed to create user. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};
export const editUser = async (userId, userData) => {
  try {
    const response = await userApi.put(`/user/${userId}`, userData);
    if (response.status !== 200) {
      throw new Error(`Failed to update apartment. Status: ${response.status}`);
    }
    return response.data;
  } catch (error) {
    console.error("Error updating apartment:", error);
    throw error;
  }
};
