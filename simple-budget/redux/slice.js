import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user
        },
    }
});

export const setUser = user.actions.setUser;
export default user.reducer;