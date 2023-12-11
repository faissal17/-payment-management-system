import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ActivatEmail } from "../Api/auth.api";
function activatEmail() {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    let token = new URLSearchParams(location.search).get("token");
    // setToken(token);
    if (token) {
      ActivateUserEmail(token);
    }
  }, [location]);

  const ActivateUserEmail = async (token) => {
    try {
      await ActivatEmail(email, token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <div>
        <h1 className="text-3xl font-bold mb-9">
          Hello Your Email has been activated
        </h1>
        <Link className="mt-5 text-xl font-bold text-sky-800" to="/login">
          click Here to login to your account
        </Link>
      </div>
    </React.Fragment>
  );
}
export default activatEmail;
