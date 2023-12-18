import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
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
