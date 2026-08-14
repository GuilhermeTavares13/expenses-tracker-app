import { createSlice } from "@reduxjs/toolkit";
import * as Crypto from 'expo-crypto';

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [],
        recentTotal: 0
    },
    reducers: {
        addExpenses: (state, action) => {
            state.expenses.push({
                id: Crypto.randomUUID(),
                name: action.payload.name,
                value: action.payload.value,
                date: action.payload.date
            })
        },
        recentTotal: (state, action) => {
            const allExpenses = state.expenses;

            if (allExpenses == undefined) {
                state.recentTotal = 0;
            } 

            const filteredExpenses = allExpenses.filter((expense) => expense.date > Date.now() - 7);

            let sum = 0;

            filteredExpenses.forEach(element => {
                sum += element.value || 0;
            });

            state.recentTotal = sum;
        }
    }
});

export const { addExpenses, recentTotal } = expensesSlice.actions;
export default expensesSlice.reducer;