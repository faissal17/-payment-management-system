import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

function login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid email form";
      } else if (!values.password) {
        errors.password = "Password is required";
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
          Pay<span className="text-green-500">Union</span>
          <span className="text-red-500">Pro</span>
        </Link>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-4xl text-purple-400 font-bold">
              Login to your account
            </h1>
            <form onSubmit={formik.handleSubmit}>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@Example.com"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 mt-5 text-lg font-semibold">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div>
                <label className="flex my-2 text-lg font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 mt-5 font-semibold text-lg">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded-full"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't you have an account?
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:underline dark ml-1"
                >
                  Register Here
                </Link>
              </p>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
                Forget Your password?
                <Link
                  to="/forgetPassword"
                  className="font-medium text-red-500 hover:underline dark ml-1"
                >
                  Click Here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default login;
