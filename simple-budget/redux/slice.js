import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        expense: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user; // Directly assign payload
        },
        logoffUser: (state) => {
            state.user = null;
        },
        setExpenseList: (state, action) => {
            state.expense = action.payload.expense; // Directly assign payload
        }
    }
});

// Selectors (use these to get values from the state)
export const selectUser = (state) => state.user.user;
export const selectExpenses = (state) => state.user.expense;

// Export actions & reducer
export const { setUser, logoffUser, setExpenseList } = userSlice.actions;
export default userSlice.reducer;
