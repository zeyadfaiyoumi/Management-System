// App.jsx
import React from "react";
import Signup from "./signup";
import Login from "./login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="bg-black p-10">
            <Link className=" text-white px-10" to="/signup">
              Sign Up
            </Link>
            <Link className=" text-white" to="/login">
              Login
            </Link>
          </div>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
