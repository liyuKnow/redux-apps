// import { createSlice } from "@reduxjs/toolkit";

// const initialStateValue = {
//     name: "kidus",
//     email: "kidus@gmail.com"
// }

// export const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         value: initialStateValue,
//     },
//     reducers: {
//         update: (state, action) => {
//             state.value = action.payload;
//         },
//         remove: (state) => {
//             state.value = {};
//         },
//     }
// });

// export const { update, remove } = userSlice.actions;

// export default userSlice.reducer;

// ======================================================================================
//                               Redux With Api Example
// ======================================================================================

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "kidus",
            email: "kidus@gmail.com"
        },
        pending: false,
        error: false
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.user = action.payload;
            state.pending = false;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        }
    }
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;

export default userSlice.reducer;