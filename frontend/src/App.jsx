import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import login from "./auth/login";
import register from "./auth/register";
import activatEmail from "./auth/activeEmail";
import forgetPassword from "./auth/forgetPassword";
import resetPassword from "./auth/resetPassword";
import AppartementDashboard from "./component/AppartementDashboard";
import PaymentDashboard from "./component/PaymentDashboard";
import addApartement from "./component/apartementCrud/addApartement";
import UpdateApartement from "./component/apartementCrud/editApartement";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={login} />
          <Route path="/register" Component={register} />
          <Route path="/ActiveEmail" Component={activatEmail} />
          <Route path="/forgetPassword" Component={forgetPassword} />
          <Route path="/resetPassword" Component={resetPassword} />
          <Route path="/Appartement" Component={AppartementDashboard} />
          <Route path="/Payment" Component={PaymentDashboard} />

          {/*Route of Apartement Crud*/}

          <Route path="/addApartement" Component={addApartement} />
          <Route path="/editApartement/:id" Component={UpdateApartement} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
