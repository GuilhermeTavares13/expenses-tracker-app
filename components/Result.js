import { View, Text, StyleSheet } from 'react-native';
import { formatDecimal } from '../utils/utilities';
import { colors } from '../utils/colors';

function ResultContainer({ title, value }) {

    const itemValue = formatDecimal(value, 2);

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.innerText}>{title}</Text>
            </View>
            <View style={styles.valueContainer}>
                <Text style={styles.valueText}>{itemValue}</Text>
            </View>
        </View>
    );
}

export default ResultContainer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        margin: 10,
        elevation: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    innerText: {
        color: colors.lightBlue
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