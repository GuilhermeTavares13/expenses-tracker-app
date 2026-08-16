import { useSelector } from "react-redux";
import moment from "moment";


export function getRecentExpensesTotal(expenses) {
    let sum = 0;

    expenses.forEach(element => {
        sum += parseFloat(element.value);
    });

    return sum;
}

export function getRecentExpenses() {
    const expenses = useSelector((state) => state.expenses.expenses);

    const recentExpenses = [];

    expenses.forEach((expense) => {
        const isRecent = moment(expense.date) >= moment().subtract(7,'days');
        
        if (isRecent) {
            recentExpenses.push({
                id: expense.id,
                name: expense.name,
                value: expense.value,
                date: moment(expense.date).format('L')
            });
        }
    })
    
    return recentExpenses;
}