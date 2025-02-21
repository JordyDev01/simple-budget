import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: 'user',
    initialState: {
        user: {},
        expense: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user
        },
        logoffUser: (state) => {
            state.user = null
        },
        setExpenseList: (state, action) => {
            state.expense = action.payload.expense
        }
    }
});

export const setUser = user.actions.setUser;
export default user.reducer;