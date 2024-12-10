import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import StarCanvas from "./components/StarCanvas/StarCanvas";
import { About, Home, Projects, Skills } from "./Pages";

function App() {
  return (
    <div>
      <StarCanvas />
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
    </div>
  );
}

export default App;
