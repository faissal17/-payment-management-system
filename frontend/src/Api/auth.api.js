import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000/auth",
  timeout: 5000,
});

export const Login = async (email, password) => {
  try {
    const response = await api.post("/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const Register = async (name, email, password) => {
  try {
    const response = await api.post("/register", {
      name: name,
      email: email,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("register failed");
    }
  } catch (error) {
    console.error("Error regestering in:", error);
    throw error;
  }
};
export const ForgetPassword = async (email) => {
  try {
    const response = await api.post("/forgetpassword", {
      email: email,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error in operation");
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const ResetPassword = async (password, token) => {
  try {
    const response = await api.post(`/resetpassword?token=${token}`, {
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("reset password failed");
    }
  } catch (error) {
    console.error("Error while reseting the password in:", error);
    throw error;
  }
};
export const ActivatEmail = async (email, token) => {
  try {
    const response = await api.post(`/activeEmail?token=${token}`, {
      email: email,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Email activation failed");
    }
  } catch (error) {
    console.error("Error while activating the email in:", error);
    throw error;
  }
};
