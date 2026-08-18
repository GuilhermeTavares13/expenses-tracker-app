import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 4,
        backgroundColor: colors.darkBlue
    },
    header: {
        height: 50,
        backgroundColor: colors.lightBlue,
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
        backgroundColor: colors.lightBlue,
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
        backgroundColor: colors.lightBlue,
        margin: 10
    },
    dateBtnText: {
        color: 'white'
    }
});