import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import "../styles/About.css"
// import background from "../img/background2.jpg"

// add style for sure and in fade in move in styles look for page layout options

export default function Container() {
  const [currentPage, setCurrentPage] = useState("Skill");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Project") {
      return <Project />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
    <div className="Container">
      <Header />
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
    <Footer />
    </>
  );
}
