import { useDispatch } from 'react-redux';
import { dataAction } from '../redux/slices/dataSlice';

const useSortData = () => {
	const dispatch = useDispatch();
	const getKeys = (data = [], type) => {
		let obj = {};

		data.forEach((element) => {
			obj[element[type]] = element;
		});
		const keys = Object.keys(obj);

		const sortedData = getTotalAmountFromKeys(data, keys, type);
		dispatch(dataAction.setkeys(keys));

		dispatch(dataAction.setSortData(sortedData));
		getGraphData(sortedData);
	};

	const getGraphData = (data) => {
		const newData = data.map(({ key, value }) => {
			return { name: key, value: value.length };
		});
		dispatch(dataAction.setSortGraphData(newData));
	};

	const getTotalAmountFromKeys = (data = [], keys = [], type) =>
		keys.map((key) => {
			const value = data.filter((element) => element[type] === key);
			return { value, key };
		});

	return getKeys;
};

export default useSortData;
