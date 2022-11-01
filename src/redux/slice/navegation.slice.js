import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openNavigation: false,
};

const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		toggleNavigation: state => {
			state.openNavigation = !state.openNavigation;
		},
	},
});

export const { toggleNavigation } = navigationSlice.actions;

export default navigationSlice.reducer;
