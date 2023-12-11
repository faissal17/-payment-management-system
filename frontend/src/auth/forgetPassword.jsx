import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { ForgetPassword } from "../Api/auth.api";
import { useFormik } from "formik";

function forgetPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      try {
        await ForgetPassword(values.email);
        Swal.fire({
          text: "Please check your email",
          icon: "question",
        });
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "No User found with this email",
          icon: "error",
        });
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email form";
      }
      return errors;
    },
  });

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center px-3 py-3 my-7">
        <Link
          to="/"
          className="flex items-center mb-6 text-2xl font-bold text-blue-500 uppercase"
        >
          Allo<span className="text-red-500">Media</span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl text-purple-400 font-bold">
              Reset Password
            </h1>
            <h4 className="text-md text-blue-500 font-semibold">
              please enter your regestration email to reset your password
            </h4>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="flex items-center my-2 text-lg font-medium text-gray-900 dark:text-white">
                  email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@Example.com"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 mt-5 font-semibold text-lg">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default forgetPassword;
