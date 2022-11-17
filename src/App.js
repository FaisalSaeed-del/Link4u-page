import "./App.css";
import Contact from "./components/contact/Contact";
import DataCenter from "./components/datacenter/DataCenter";
import FinishLine from "./components/finishline/FinishLine";
import Footer from "./components/footer/Footer";
import Navbar from "./components/nav/Navbar";
import Plans from "./components/plans/Plans";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DataCenter />
      <Plans />
      <Contact />
      <Footer />
      <FinishLine />
    </div>
  );
}

export default App;
