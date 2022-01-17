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

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserWithThunk = createAsyncThunk("users/update", async (user) => {
    const res = await axios.post(`http://localhost:3333/api/users/:id/update`, user);
    return res.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            name: "kidus",
            email: "kidus@gmail.com"
        },
        pending: null,
        error: null
    },
    reducers: {
        updateStart: (state) => {
            state.pending = true;
        },
        updateSuccess: (state, action) => {
            state.user = action.payload;
            state.pending = false;
            state.error = false;
        },
        updateError: (state) => {
            state.error = true;
            state.pending = false;
        }
    },
    extraReducers: {
        [updateUserWithThunk.pending]: (state, action) => {
            state.pending = true;
            state.error = false;
        },
        [updateUserWithThunk.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.pending = false;
            state.error = false;
        },
        [updateUserWithThunk.rejected]: (state, action) => {
            state.error = true;
            state.pending = false;
        }
    }
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;

export default userSlice.reducer;