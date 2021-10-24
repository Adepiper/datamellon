import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChartComponent from './Components/charts/Barchart/BarChartComponent';
import Navbar from './Components/Navbar/Navbar';
import PieChartComponent from './Components/charts/PieChart/PieChartComponent';
import CompositeBarChart from './Components/charts/CompositeBarChart/CompositeBarChart';
import Table from './Components/charts/Table/Table';
import NormalLoader from './Components/NormalLoader/NormalLoader';
import SearchBar from './Components/SearchBar/SearchBar';
import useHttps from './hooks/useHttps';
import TimeSeriesChart from './Components/charts/TimeSeriesChart/TimeSeriesChart';
import { useEffect } from 'react';
import DropdownContainer from './Components/dropdown/Dropdown';
import useSortData from './hooks/useSortData';

function App() {
	const { sendRequest, data, loading } = useHttps();
	const sortData = useSortData();

	useEffect(() => {
		if (data.length > 0) {
			sortData(data, 'Region');
		}
	}, [data]);

	return (
		<div className='App'>
			<button onClick={sendRequest}> click me </button>
			{loading && <NormalLoader />}
			<Navbar />
			<SearchBar />
			<DropdownContainer />
			{!loading && (
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
					<div className='chart'>
						<TimeSeriesChart />
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
