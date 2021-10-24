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
		data: { sortedData },
	} = useSelector((state) => state);
	return (
		<>
			{sortedData.length > 0 && (
				<ResponsiveContainer aspect={1.5}>
					<BarChart data={sortedData}>
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
