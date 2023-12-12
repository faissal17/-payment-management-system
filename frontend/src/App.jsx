import React from "react";
import "./App.css";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import login from "./auth/login";
import register from "./auth/register";
import activatEmail from "./auth/activeEmail";
import forgetPassword from "./auth/forgetPassword";
import resetPassword from "./auth/resetPassword";
import dashboard from "./component/dashboard";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={login}/>
          <Route path="/register" Component={register}/>
          <Route path="/ActiveEmail" Component={activatEmail}/>
          <Route path="/forgetPassword" Component={forgetPassword}/>
          <Route path="/resetPassword" Component={resetPassword}/>
          <Route path="/dashboard" Component={dashboard}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
