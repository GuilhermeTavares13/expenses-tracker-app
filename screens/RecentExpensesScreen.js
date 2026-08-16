import {  useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Modal, FlatList } from 'react-native';
import IconButton from '../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import AddModal from './AddModal';
import ListItem from '../components/ListItem';
import ResultContainer from '../components/ResultContainer';
import { getRecentExpenses, getRecentExpensesTotal } from '../utils/utilities';

function RecentExpensesScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const recentExpenses = getRecentExpenses();
    const totalRecentExpenses = getRecentExpensesTotal(recentExpenses);
    
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
                <ResultContainer title="Last 7 days" value={totalRecentExpenses} />
                <FlatList
                    data={recentExpenses}
                    renderItem={({item}) => 
                        <ListItem name={item.name} value={item.value} date={item.date} />
                    }
                    keyExtractor={item => item.id}
                />
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