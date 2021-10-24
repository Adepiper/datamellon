/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSelector } from 'react-redux';
import useSortData from '../../hooks/useSortData';

const options = [
	{ value: 'Region', label: 'Region' },
	{
		value: 'Category',
		label: 'Category',
	},
];

const DropdownContainer = () => {
	const {
		data: { allData },
	} = useSelector((state) => state);
	const getSortedData = useSortData();
	const [type, setType] = useState('Region');

	useEffect(() => {
		allData.length > 0 && getSortedData(allData, type);
	}, [type, allData]);

	const _onSelect = ({ value }) => {
		setType(value);
	};
	return (
		<>
			{allData.length > 0 && (
				<Dropdown
					options={options}
					onChange={_onSelect}
					value={type}
				></Dropdown>
			)}
		</>
	);
};

export default DropdownContainer;
