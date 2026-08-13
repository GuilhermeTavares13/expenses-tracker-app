import { View, Text, StyleSheet, Pressable, TextInput, Vibration } from "react-native";
import { addExpenses } from "../expenses/expensesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";


let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); 
let yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

function AddModal({ onModal }) {
    const [name, setName] = useState('');
    const [expenseValue, setExpenseValue] = useState('');

    const dispatch = useDispatch();
    
    function storeExpense() {
        dispatch(
            addExpenses(
                {
                    
                }
            )
        );
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
                        <Text style={styles.text}>Date:</Text>
                        <TextInput style={styles.textInput} value={today} editable={false} />
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
    }
});
