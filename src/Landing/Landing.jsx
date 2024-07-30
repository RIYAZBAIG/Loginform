import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forgotpassword } from "../Components/Forgotpassword";
import { Login } from "../Components/Login";
import { Registration } from "../Components/Registration";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="forgotpass" element={<Forgotpassword />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
