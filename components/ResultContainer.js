import { View, Text, StyleSheet } from 'react-native';

function ResultContainer({ title, value }) {


    const formattedValue = parseFloat(value).toFixed(2);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.innerText}>{title}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{formattedValue}</Text>
            </View>
        </View>
    );
}

export default ResultContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e4dafe',
        margin: 10,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    innerText: {
        color: '#3518B7'
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