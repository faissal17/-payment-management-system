import React from "react";
import "./App.css";
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import login from "./auth/login";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={login}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
