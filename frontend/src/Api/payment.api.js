import axios from "axios";

const paymentApi = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

export const getAllPayment = async () => {
  try {
    const response = await paymentApi.get("/payment");
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
