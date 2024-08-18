import "./App.css";
import Navbar from "./components/navbar";
import { Home } from "./pages/home";
import Project from "./pages/projects";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-[100vh]">
        <Home />
      </div>
      <div className="h-[100vh] w-[100%]">
        <Project />
      </div>
    </>
  );
}

export default App;
