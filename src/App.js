import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Experience  from "./components/Experience";
import {Footer} from "./components/Footer";
import { Clients } from "./components/Clients";
import { Services } from "./components/Services";

export default function App() {
  return(
    <main className="text-gray-400 body-font">
      <Navbar />
      <About />
      <Experience/>
      <Services />
      <Skills />
      <Projects />
      <Clients/>
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}
