import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import axios from "axios";

import "./pages/comman.scss";
import Home from "./pages/Home";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./component/Dasboard";
function App() {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/signup");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route> */}

        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
