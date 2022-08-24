import { configureStore } from "@reduxjs/toolkit";
import photo from "../components/PhotoList/PhotoListSlice";

const store = configureStore({
	reducer: photo,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: false,
	}),
	devTools: process.env.NODE_ENV !== "production",
});

export default store;