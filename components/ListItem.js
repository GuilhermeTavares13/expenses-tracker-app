import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import EditExpense from '../screens/EditExpense';
import { useSelector } from 'react-redux';
import { formatDecimal } from '../utils/utilities';
import ModalItem from './ModalItem';
import { colors } from '../utils/colors';

function ListItem({id, name, value, date}) {
    const [modalVisible, setModalVisible] = useState(false);
    const expenses = useSelector((state) => state.expenses.expenses);
    const aExpense = expenses.filter((expense) => expense.id == id);
    const unparsedDate = aExpense[0].date;

    const handlePress = () => {
        setModalVisible(true);
    }

    const itemValue = formatDecimal(value, 2);

    return(
        <>
            <Pressable onPress={handlePress}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.innerText}>{name}</Text>
                        <Text style={styles.innerText}>{date}</Text>
                    </View>
                    <View style={styles.valueContainer}>
                        <Text style={styles.valueText}>{itemValue}</Text>
                    </View>
                </View>
            </Pressable>

             <ModalItem visible={modalVisible}>
                <EditExpense 
                    id={id} 
                    aName={name} 
                    value={itemValue} 
                    date={unparsedDate} 
                    onModal={setModalVisible}
                />
            </ModalItem>
        </>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBlue,
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
        color: colors.darkBlue
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