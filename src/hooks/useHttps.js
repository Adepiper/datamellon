/* eslint-disable no-undef */
import { useCallback, useState, useEffect } from 'react';

const useHttps = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [cancel, setCancel] = useState(false);

	const httpErrorCallback = (response, responseCallback) => {
		if (response.status === 401) {
			throw new Error('Authentication Error');
		}

		if (!response.ok) {
			responseCallback && responseCallback(response);
			throw new Error('Something went wrong!');
		}
	};

	useEffect(() => {
		// sendRequest();
		return () => {
			setCancel(true);
		};
	}, []);

	const sendRequest = useCallback(async () => {
		const body = {
			angular_test: 'angular-developer',
		};

		setLoading(true);

		const url = `https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub`;

		try {
			const response = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(body),
			});

			httpErrorCallback(response);
			if (cancel) {
				return;
			}

			const data = await response.json();

			setData(data);
			setLoading(false);
		} catch (err) {
			console.log(err.message);
			setLoading(false);
		}
	}, []);

	return {
		sendRequest,
		loading,
		data,
	};
};

export default useHttps;
