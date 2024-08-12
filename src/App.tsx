import "./App.css";
import Navbar from "./components/navbar";
import { Home } from "./pages";
import Project from "./pages/project";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
