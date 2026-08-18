import { useSelector } from "react-redux";
import moment from "moment";

export function getExpensesTotal(expenses) {
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
        const isRecent = getIsRecent(expense.date, 7);     
        if (isRecent) {
            recentExpenses.push({
                id: expense.id,
                name: expense.name,
                value: expense.value,
                date: formatShortDate(expense.date)
            });
        }
    })
    
    return recentExpenses;
}

export function getExpenses() {
    const expenses = useSelector((state) => state.expenses.expenses);
    const formattedExpenses = [];

    expenses.forEach((expense) => {
        formattedExpenses.push({
            id: expense.id,
            name: expense.name,
            value: expense.value,
            date: formatShortDate(expense.date)
        })
    })

    return formattedExpenses;
}

export function formatDecimal(value, places) {
    return parseFloat(value).toFixed(places);
}

export function formatDateToUnix(date) {
    return moment(date).valueOf();
}

export function formatShortDate(date) {
    // Returns mm/dd/yyyy
    return moment(date).format('L');
}

export function compareDates(initialDate, endDate) {
    // If true initialDate is after endDate
    initialDate = formatDateToUnix(initialDate);
    endDate = formatDateToUnix(endDate);
    return endDate >= initialDate;
}

export function getSubtractedDate(date, days) {
    return moment(date).subtract(days,'days'); 
}

export function getToday() {
    return moment();
}

export function getIsRecent(date, days) {
    const subtractedDate = getSubtractedDate(getToday(), days);
    return compareDates(subtractedDate, date)
}