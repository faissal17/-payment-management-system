import React from "react";
import "./App.css";
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import login from "./auth/login";
import register from "./auth/register";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={login}/>
          <Route path="/register" Component={register}/>

        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
