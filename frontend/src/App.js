import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Context from "./components/Context";
import Production from "./components/Production";
import Deliverables from "./components/Deliverables";
import Investment from "./components/Investment";
import NextSteps from "./components/NextSteps";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-white min-h-screen">
      <Header />
      <Hero />
      <Context />
      <Production />
      <Deliverables />
      <Investment />
      <NextSteps />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
