import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconButton from '../components/IconButton';

function RecentExpensesScreen({ navigation }) {
    
    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Recent Expenses',
            headerRight: () => {
                return <IconButton icon="add" color="white"/>
            },
            headerStyle: {
                backgroundColor: '#3518B7'
            },
            headerTintColor: 'white'
        })
    }, []);

    return (
        <View>
            <Text>Recent Expenses</Text>
        </View>
    );
}

export default RecentExpensesScreen;