import React from 'react';
import './Barchart.css';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';

const BarChartComponent = () => {
	const {
		data: { sortedGraphData },
	} = useSelector((state) => state);
	return (
		<>
			{sortedGraphData.length > 0 && (
				<ResponsiveContainer aspect={1.8}>
					<BarChart data={sortedGraphData}>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='name' />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey='value' fill='#8884d8' />
					</BarChart>
				</ResponsiveContainer>
			)}
		</>
	);
};

export default BarChartComponent;
