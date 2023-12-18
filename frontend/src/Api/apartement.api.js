import axios from "axios";

const apartementAPi = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});
export const getAllApartement = async () => {
  try {
    const response = await apartementAPi.get("/apartement");
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
export const deleteAllApartement = async (apartmentId) => {
  try {
    const response = await apartementAPi.delete(`/apartement/${apartmentId}`);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to delete");
    }
  } catch (error) {
    console.error("Error deleting apartment:", error);
    throw error;
  }
};
export const createApartement = async (apartmentData) => {
  try {
    const response = await apartementAPi.post("/apartement", apartmentData);

    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(`Failed to create apartment. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error creating apartment:", error);
    throw error;
  }
};

export const editApartement = async (apartmentId, apartmentData) => {
  try {
    const response = await apartementAPi.put(
      `/apartement/${apartmentId}`,
      apartmentData
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
