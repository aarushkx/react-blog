import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

/**
 * This function is used to configure the Redux store.
 * It uses the `configureStore` function from the `@reduxjs/toolkit` package.
 * The `configureStore` function takes an object as an argument with a `reducer` field.
 * The `reducer` field can be used to define the reducers for the application's state.
 * The `configureStore` function returns a Redux store with the provided reducer(s).
 * The returned store is then assigned to the `store` constant.
 */
const store = configureStore({
    reducer: {
        auth : authSlice,
        // TODO: Add more slices here for posts
    },
});

export default store;
