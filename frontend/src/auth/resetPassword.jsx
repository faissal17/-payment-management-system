import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ResetPassword } from "../Api/auth.api";
import Swal from "sweetalert2";

function resetPassword() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [password, setPassword] = useState("");
  const location = useLocation();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await ResetPassword(password, token);
      Swal.fire({
        text: "password reset successfully",
        icon: "success",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      Swal.fire({
        title: "error!",
        text: "Error in this operation",
        icon: "error",
      });
    }
  };
  // useEffect to get the token from the URL
  useEffect(() => {
    let token = new URLSearchParams(location.search).get("token");
    setToken(token);
  }, [location]);

  // formik

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
              please enter your new password
            </h4>
            <form onSubmit={submit}>
              <div>
                <label className="flex items-center my-2 text-lg font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded-full"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default resetPassword;
