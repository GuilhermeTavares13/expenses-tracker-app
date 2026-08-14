import { View, Text, StyleSheet } from 'react-native';

function ListItem({id, name, value, date}) {

    const formattedValue = parseFloat(value).toFixed(2);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.innerText}>{name}</Text>
                <Text style={styles.innerText}>{date}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{formattedValue}</Text>
            </View>
        </View>
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