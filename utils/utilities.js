export function getRecentExpensesTotal(expenses) {
    let sum = 0;

    expenses.forEach(element => {
        sum += parseFloat(element.value);
    });

    return sum;
}