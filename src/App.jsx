import React from "react";
import Navbar from "./components/Navbar";
import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import Hero from "./components/Hero";
import Coctails from "./components/Coctails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Coctails />
      <About />
      {/* <div className="h-dvh bg-black"></div> */}
    </main>
  );
};

export default App;
