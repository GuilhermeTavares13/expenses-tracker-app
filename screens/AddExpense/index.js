import { View, Text, Pressable, TextInput, Vibration } from "react-native";
import { addExpenses } from "../../expenses/expensesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { formatDateToUnix, formatShortDate } from "../../utils/utilities";
import { styles } from "./styles";

function AddExpense({ onModal }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [name, setName] = useState('');
    const [expenseValue, setExpenseValue] = useState('');
    const [pickedDate, setPickedDate] = useState(Date.now());
    const dispatch = useDispatch();

    function storeExpense() {
        dispatch(
            addExpenses(
                {
                    name: name,
                    value: expenseValue,
                    date: pickedDate
                }
            )
        );
        onModal(false);
    }

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmDate = (date) => {
        setPickedDate(formatDateToUnix(date));
        hideDatePicker();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Add Expense</Text>
            </View>
            <View style={styles.expenseContainer}>
                <View>
                    <View style={styles.expense}>
                        <Text style={styles.text}>Name:</Text>
                        <TextInput style={styles.textInput} onChangeText={(text) => setName(text)}/>
                    </View>
                    <View style={styles.expense}>
                        <Text style={styles.text}>Value:</Text>
                        <TextInput style={styles.textInput} inputMode="decimal" onChangeText={(text) => setExpenseValue(text)}/>
                    </View>
                    <View style={styles.expense}>
                        <View style={styles.dateContainer}>
                            <Text style={styles.text}>Date:</Text>
                            <View style={styles.dateBtn}>
                                <Pressable onPress={() => setDatePickerVisibility(true)}>
                                    <Text style={styles.dateBtnText}>{formatShortDate(pickedDate)}</Text>
                                </Pressable>
                            </View>
                        </View>
                       
                        <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirmDate} onCancel={hideDatePicker}/>
                    </View>
                </View> 
            </View>
            <View style={styles.buttonsContainer}>
                <View>
                    <Pressable onPress={() => onModal(false)}>
                        <Text style={styles.text}>Cancel</Text>
                    </Pressable>
                </View>
                <View style={styles.addButton}>
                    <Pressable onPress={storeExpense}>
                        <Text style={styles.text}>Add</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default AddExpense;


