import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    age: 0,
    email: ""
}

export const userSlice = createSlice({
    // The name of the state
    name: "user",

    // The initial state of the reducer
    initialState: {
        value: initialStateValue
    },

    // The reducers
    reducers: {
        // The reducer for the login action
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state, action) => {
            state.value = initialStateValue;
        }
    }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;