import { createSlice } from "@reduxjs/toolkit";

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: []
    },
    reducers: {
        addExpenses: (state, action) => {
            state.expenses.push({
                id: action.payload.id,
                name: action.payload.name,
                value: action.payload.value,
                date: action.payload.date
            })
        }
    }
});

export const { addExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;