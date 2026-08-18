import { View, FlatList } from 'react-native';
import IconButton from '../../components/IconButton';
import { useNavigation } from '@react-navigation/native';
import { useState, useLayoutEffect } from 'react';
import AddExpense from '../AddExpense/index';
import ListItem from '../../components/ListItem';
import ResultContainer from '../../components/Result';
import { getRecentExpenses, getExpensesTotal } from '../../utils/utilities';
import ModalItem from '../../components/ModalItem';
import { styles } from './styles';
import { colors } from '../../utils/colors';

function RecentExpensesScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const recentExpenses = getRecentExpenses();
    const totalRecentExpenses = getExpensesTotal(recentExpenses);
    
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
                backgroundColor: colors.lightBlue,
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
                        <ListItem id={item.id} name={item.name} value={item.value} date={item.date} />
                    }
                    keyExtractor={item => item.id}
                />
            </View>

            <ModalItem visible={modalVisible} >
                <AddExpense onModal={setModalVisible}/>
            </ModalItem>
        </>
    );
}

export default RecentExpensesScreen;
