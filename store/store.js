import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from '../expenses/expensesSlice';

export default configureStore({
    reducer: {
        expenses: expensesReducer
    }
});