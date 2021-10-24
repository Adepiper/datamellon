const useSortData = () => {
	const getKeys = (data = [], type) => {
		let obj = {};

		data.forEach((element) => {
			obj[element[type]] = element;
		});
		const keys = Object.keys(obj);

		getTotalAmountFromKeys(data, keys, type);
	};

	const getTotalAmountFromKeys = (data = [], keys = [], type) =>
		keys.map((key) => {
			let object = {};
			object[key] = data.filter(
				(element) => element[type] === key
			).length;
			return object;
		});

	return getKeys;
};

export default useSortData;
