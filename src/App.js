import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

//components
import Home from "./components/Home";
import NavbarR from "./components/Navbar";
import Login from "./components/LoginUser";
import LoginMar from "./components/Loginmar";
import Map from "./components/Map";
import Userhome from "./components/Userhome";
import UserMar from "./components/Usermar";
import Point from "./components/point";
import Footer from "./components/Footer";
import Privacypolicy from "./components/privacy-policy";

function App() {
  return (
    <div>
      <NavbarR/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/loginuser" element={<Login />}></Route>
          <Route path="/loginMar" element={<LoginMar />}></Route>
          <Route path="/map" element={<Map />}></Route>
          <Route path="/userhome" element={<Userhome />}></Route>
          <Route path="/usermar" element={<UserMar />}></Route>
          <Route path="/point" element={<Point />}></Route>
          <Route path="/privacy-policy" element={<Privacypolicy />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
