import axios from "axios";

const paymentApi = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 8000,
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
export const deletPayment = async (paymentId) => {
  try {
    const response = await paymentApi.delete(`/payment/${paymentId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete");
    }
  } catch (error) {
    console.error("Error deleting Payment:", error);
    throw error;
  }
};

export const createPayment = async (paymentData) => {
  try {
    const response = await paymentApi.post("/payment", paymentData);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(
        `Failed to create. Server responded with status ${response.status}.`
      );
    }
  } catch (error) {
    console.error("Error creating Payment:", error);
    throw error;
  }
};
export const updatePayment = async (paymentId, paymentData) => {
  try {
    const response = await paymentApi.put(
      `/payment/${paymentId}`,
      paymentData
    );

    if (response.status !== 200) {
      throw new Error(`Failed to update apartment. Status: ${response.status}`);
    } 
    return response.data;
    
  } catch (error) {
    console.error("Error updating apartment:", error);
    throw error;
  }
};