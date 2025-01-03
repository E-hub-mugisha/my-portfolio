// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-between">

      <a href="/" className="logo d-flex align-items-center  me-auto me-lg-0">
        <img src="assets/img/logo.png" alt=""/>
        <i className="bi bi-camera"></i>
        <h1>Eric's</h1>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a href="#about">Who I am</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">What I do</a></li>
          <li><a href="#skills">Tools</a></li>
          <li><a href="#project">Portfolio</a></li>
          <li><a href="#contact">Let's Talk</a></li>
        </ul>
      </nav>

      <div className="header-social-links">
        <a href="#" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header>
  );
}