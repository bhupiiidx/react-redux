import React from "react";
import { Route, Routes } from "react-router-dom";
import Adduser from "../pages/Adduser";
import Home from "../pages/Home";
import Viewuser from "../pages/Viewuser";
import Deleteuser from "../pages/DeleteUser";

function index() {
  return (
    <Routes>
      <Route path="/view-user" element={<Viewuser />} exact />
      <Route path="/add-user" element={<Adduser />} exact />
      <Route path="/delete-user" element={<Deleteuser />} exact />
      <Route path="/" element={<Home />} exact />
    </Routes>
  );
}

export default index;
