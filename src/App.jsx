import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NaviBar from "./Dashboard/NaviBar";
import SideBar from "./Dashboard/SideBar";
import DarkModeToggle from "./Dashboard/DarkModeToggle";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <TopBar />
        <NavBar />
        
        <div className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/navibar" element={<NaviBar />} />
            <Route path="/sidebar" element={<SideBar />} />
            <Route path="/darkmodetoggle" element={<DarkModeToggle />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
