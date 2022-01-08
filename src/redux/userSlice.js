import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "kidus",
    email: "kidus@gmail.com"
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialStateValue,
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        },
        remove: (state) => {
            state.value = {};
        },
    }
});

export const { update, remove } = userSlice.actions;

export default userSlice.reducer;