import { createSlice } from "@reduxjs/toolkit";

// initial state of the auth slice
const initialState = {
    status: false,
    userData: null,
};

/**
 * This function is a reducer that handles the login and logout actions
 * for the authentication slice of the Redux store.
 * It sets the 'status' property of the state to true when a 'login' action is dispatched,
 * and sets it to false when a 'logout' action is dispatched.
 * It also sets the 'userData' property of the state to the provided user data when a 'login' action is dispatched,
 * and sets it to null when a 'logout' action is dispatched.
 */
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
