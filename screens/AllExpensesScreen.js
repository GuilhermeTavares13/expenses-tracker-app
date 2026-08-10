import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import IconButton from "../components/IconButton";

function AllExpensesScreen() {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={styles.headerRightButton}>
                        <IconButton icon="add" color="white"/>
                    </View>
                )
            },
            headerStyle: {
                backgroundColor: '#3518B7',
            },
            headerTintColor: 'white',
        })
    }, []);


    return (
        <View style={styles.container}>
            <Text>All Expenses</Text>
        </View>
    );
}

export default AllExpensesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27127B'
    },
    headerRightButton: {
        marginHorizontal: 30
    }
});