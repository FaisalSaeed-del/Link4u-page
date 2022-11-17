import "./App.css";
import DataCenter from "./components/datacenter/DataCenter";
import Navbar from "./components/nav/Navbar";
import Plans from "./components/plans/Plans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataCenter />
      <Plans />
    </div>
  );
}

export default App;
