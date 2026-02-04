
import "./App.css";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import WhatWeDo from "./components/WhatWeDo";
import FlagshipExperiences from "./components/FlagshipExperiences";
import CallToAction from "./components/CallToAction";


function App() {
  return (
    <div className="goldmonkey-journeys">
      <Hero />
      <Manifesto />
      <WhatWeDo />
      <FlagshipExperiences />
      <CallToAction />
    </div>
  );
}

export default App;
