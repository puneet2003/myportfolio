import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";

const NavBar = () => {
  const [isTop, setIsTop] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsTop(scrollTop < 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        .navbar-transparent {
          background-color: rgba(255, 255, 255, 0); /* Fully transparent */
          transition: background-color 0.3s ease;
        }
        .navbar-white {
          background-color: rgba(255, 255, 255, 0.9); /* Slightly white */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .navbar-nav .nav-link {
          font-size: 1.1rem;
          margin-right: 15px;
          color: #333; /* Default link color */
          transition: color 0.3s ease;
        }
        .navbar-nav .nav-link:hover {
          color: #007bff; /* Hover color */
        }
        .toggler {
          border-color: #333; /* Toggle button color */
        }
      `}</style>
      <Navbar
        className={`px-3 fixed-top ${!isTop ? "navbar-white" : "navbar-transparent"}`}
        expand="lg"
      >
        <Navbar.Brand className="navbar-brand" href="#home">
          {`<${mainBody.firstName} />`}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav mr-auto">
            {repos.show && <Nav.Link href="#projects">Projects</Nav.Link>}
            <Nav.Link href={about.resume} target="_blank" rel="noreferrer noopener">
              Resume
            </Nav.Link>
            {about.show && <Nav.Link href="#about">About</Nav.Link>}
            {skills.show && <Nav.Link href="#skills">Skills</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
