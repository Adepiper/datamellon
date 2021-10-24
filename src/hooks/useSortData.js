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
		dispatch(dataAction.setSortData(sortedData));
	};

	const getTotalAmountFromKeys = (data = [], keys = [], type) =>
		keys.map((key) => {
			const value = data.filter(
				(element) => element[type] === key
			).length;
			return { name: key, value };
		});

	return getKeys;
};

export default useSortData;
