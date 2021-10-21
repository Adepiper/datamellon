import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarChartComponent from "./Components/Barchart/BarChartComponent";
import Navbar from "./Components/Navbar/Navbar";
import PieChartComponent from "./Components/PieChart/PieChartComponent";
import CompositeBarChart from "./Components/CompositeBarChart/CompositeBarChart";
import Table from "./Components/Table/Table";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <div className=" container charts p-4">
        <div className="chart">
          <BarChartComponent />
        </div>
        <div className="chart">
          <PieChartComponent />
        </div>
        <div className="chart">
          <CompositeBarChart />
        </div>
        <div className="chart">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
