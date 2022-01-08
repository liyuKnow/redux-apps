import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
    // The name of the state
    name: "theme",

    // The initial state of the reducer
    initialState: {
        value: initialStateValue
    },

    // The reducers
    reducers: {
        // The reducer for the login action
        changeColor: (state, action) => {
            state.value = action.payload;
        },
        changeTheme: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeColor, changeTheme } = themeSlice.actions;

export default themeSlice.reducer;