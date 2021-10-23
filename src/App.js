import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChartComponent from './Components/charts/Barchart/BarChartComponent';
import Navbar from './Components/Navbar/Navbar';
import PieChartComponent from './Components/charts/PieChart/PieChartComponent';
import CompositeBarChart from './Components/charts/CompositeBarChart/CompositeBarChart';
import Table from './Components/charts/Table/Table';
import NormalLoader from './Components/NormalLoader/NormalLoader';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
	return (
		<div className='App'>
			<NormalLoader />
			<Navbar />
			<SearchBar />
			<div className=' container charts p-4'>
				<div className='chart'>
					<BarChartComponent />
				</div>
				<div className='chart'>
					<PieChartComponent />
				</div>
				<div className='chart'>
					<CompositeBarChart />
				</div>
				<div className='chart'>
					<Table />
				</div>
			</div>
		</div>
	);
}

export default App;
