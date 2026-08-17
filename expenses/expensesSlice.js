import { createSlice } from "@reduxjs/toolkit";
import * as Crypto from 'expo-crypto';

export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: []
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
        },
        editExpenses: (state, action) => {

            let expenseIndex = -1;

            state.expenses.forEach((expense, index) => {
                if (expense.id == action.payload.id) {
                    expenseIndex = index;
                    return;
                }
            });

            console.log(expenseIndex);

            state.expenses[expenseIndex].name = action.payload.name,
            state.expenses[expenseIndex].value = action.payload.value,
            state.expenses[expenseIndex].date = action.payload.date
        },
        deleteExpense: (state, action) => {
            let expenseIndex = -1;

            state.expenses.forEach((expense, index) => {
                if (expense.id == action.payload.id) {
                    expenseIndex = index;
                    return;
                }
            });

            state.expenses.splice(expenseIndex, 1);
        }
    }
});

export const { addExpenses, editExpenses, deleteExpense  } = expensesSlice.actions;
export default expensesSlice.reducer;