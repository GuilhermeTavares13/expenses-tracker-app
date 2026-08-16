import { createSlice } from "@reduxjs/toolkit";
import * as Crypto from 'expo-crypto';

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
        recentExpenses: []
    },
    reducers: {
        addExpenses: (state, action) => {
            const aExpense = {
                id: Crypto.randomUUID(),
                name: action.payload.name,
                value: action.payload.value,
                date: action.payload.date
            }

            state.expenses.push(aExpense);
        }
    }
});

export const { addExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;