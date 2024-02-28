import "../styles/wizard_ninja.css";
import "../styles/carrousel.css";

import WizardNinja from "./WizardNinja";
import Navbar from "./Navbar";
import Home from "./Home";
import ProjectsTitle from "./ProjectsTitle";
import ProjectCarrousel from "./ProjectCarrousel";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home />
      <WizardNinja /> */}
      <ProjectsTitle />
      <ProjectCarrousel />
    </div>
  );
}
