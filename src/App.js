import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h2 className="text-4xl mt-8">Pricing Club</h2>
      <Pricing></Pricing>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
