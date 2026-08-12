import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function RecentExpensesScreen() {
    const [modalVisible, setModalVisible] = useState(false);

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
        <>
            <View style={styles.container}>
                <Text>Recent Expenses</Text>
            </View>

            <Modal visible={modalVisible}>
                
            </Modal>
        </>
    );
}

export default RecentExpensesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#27127B'
    },
    headerRightButton: {
        marginHorizontal: 30
    }
});