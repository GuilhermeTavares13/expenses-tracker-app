import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { useState } from 'react';
import EditModal from '../screens/EditModal';
import { useSelector } from 'react-redux';

function ListItem({id, name, value, date}) {
    const [modalVisible, setModalVisible] = useState(false);
    const formattedValue = parseFloat(value).toFixed(2);
    const expenses = useSelector((state) => state.expenses.expenses);
    const aExpense = expenses.filter((expense) => expense.id == id);
    const unparsedDate = aExpense[0].date;

    const handlePress = () => {
        setModalVisible(true);
    }

    return(
        <>
            <Pressable onPress={handlePress}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.innerText}>{name}</Text>
                        <Text style={styles.innerText}>{date}</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.valueText}>{formattedValue}</Text>
                    </View>
                </View>
            </Pressable>

             <Modal visible={modalVisible} >
                <EditModal id={id} aName={name} value={value} 
                date={unparsedDate} 
                onModal={setModalVisible}/>
            </Modal>
        </>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3518B7',
        margin: 10,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    innerText: {
        color: 'white'
    },
    valueText: {
        color: '#27127B'
    },
    valueContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        borderRadius: 5,
        elevation: 5
    }
});