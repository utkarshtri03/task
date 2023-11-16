import "./App.css";
import Dashboard from "./components/dashboard";
import Herosection from "./components/Herosection";

function App() {
  return (
    <div className="w-full md:flex overflow-hidden ">
      <Dashboard />
      <Herosection />
    </div>
  );
}

export default App;
