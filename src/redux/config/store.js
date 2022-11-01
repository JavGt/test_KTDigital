import navigationReducer from '../slice/navegation.slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		navigation: navigationReducer,
	},
});

export default store;
