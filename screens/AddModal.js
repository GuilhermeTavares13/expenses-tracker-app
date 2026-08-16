import { View, Text, StyleSheet, Pressable, TextInput, Vibration } from "react-native";
import { addExpenses } from "../expenses/expensesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

function AddModal({ onModal }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [name, setName] = useState('');
    const [expenseValue, setExpenseValue] = useState('');
    const [pickedDate, setPickedDate] = useState(Date.now());
    const dispatch = useDispatch();

    function storeExpense() {
        console.log(pickedDate);
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
        console.log(date);
        console.log(moment(date).valueOf());
        setPickedDate(moment(date).valueOf());
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
                                    <Text style={styles.dateBtnText}>{moment(pickedDate).format('L')}</Text>
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

export default AddModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 4,
        backgroundColor:'#27127B'
    },
    header: {
        height: 50,
        backgroundColor: '#3518b7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: 'white',
        fontWeight: 'bold'
    },
    buttonsContainer: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    addButton: {
        backgroundColor: '#3518b7',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 3,
        elevation: 3
    },
    expense: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10
    },
    textInput: {
        backgroundColor: '#ddd',
        width: 200,
        borderRadius: 5,
        marginHorizontal: 10,
        
    },
    expenseContainer: {
        alignItems: 'center'
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    dateBtn: {
        elevation: 5,
        overflow: 'hidden',
        padding: 10,
        backgroundColor: '#3518b7',
        margin: 10
    },
    dateBtnText: {
        color: 'white'
    }
});
