import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import login from "./auth/login";
import register from "./auth/register";
import activatEmail from "./auth/activeEmail";
import forgetPassword from "./auth/forgetPassword";
import resetPassword from "./auth/resetPassword";
import AppartementDashboard from "./component/pages/AppartementDashboard";
import PaymentDashboard from "./component/pages/PaymentDashboard";
import addApartement from "./component/apartementCrud/addApartement";
import UpdateApartement from "./component/apartementCrud/editApartement";
import addPayment from "./component/paymentCrud/addPayment";
import editPayment from "./component/paymentCrud/editPayment";
import ClientDashboard from "./component/pages/ClientDashboard";
import addUser from "./component/userCrud/addUser";
import updateUser from "./component/userCrud/editUser";
import NotFound from "./component/pages/NotFound";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="*" Component={NotFound} />

          <Route path="/login" Component={login} />
          <Route path="/register" Component={register} />
          <Route path="/ActiveEmail" Component={activatEmail} />
          <Route path="/forgetPassword" Component={forgetPassword} />
          <Route path="/resetPassword" Component={resetPassword} />
          <Route path="/Appartement" Component={AppartementDashboard} />
          <Route path="/Payment" Component={PaymentDashboard} />
          <Route path="/Client" Component={ClientDashboard} />

          {/*Route of Apartement Crud*/}

          <Route path="/addApartement" Component={addApartement} />
          <Route path="/editApartement/:id" Component={UpdateApartement} />

          {/*Route of Payment Crud*/}
          <Route path="/addPayment" Component={addPayment} />
          <Route path="/editPayment/:id" Component={editPayment} />

          {/*Route of User Crud*/}

          <Route path="/addClient" Component={addUser} />
          <Route path="/editUser/:id" Component={updateUser} />

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
