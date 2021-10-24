import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	allData: [],
	sortedData: [],
};

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setALLData(state, action) {
			state.allData = action.payload;
		},
		setSortData(state, action) {
			state.sortedData = action.payload;
		},
	},
});

export const dataReducer = dataSlice.reducer;
export const dataAction = dataSlice.actions;