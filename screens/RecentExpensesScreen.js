import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Modal } from 'react-native';
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AddModal from './AddModal';

function RecentExpensesScreen() {
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <View style={styles.headerRightButton}>                   
                        <IconButton icon="add" color="white" onPress={() => setModalVisible(true)}/>
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

            <Modal visible={modalVisible} >
                <AddModal onModal={setModalVisible}/>
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