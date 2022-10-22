import { configureStore } from '@reduxjs/toolkit';
import slice from './slice';

const store = configureStore({
	reducer: {
		calendar: slice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
