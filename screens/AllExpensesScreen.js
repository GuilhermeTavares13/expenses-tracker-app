import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Modal } from 'react-native';
import IconButton from "../components/IconButton";
import { getExpensesTotal, getExpenses } from "../utils/utilities";
import ResultContainer from "../components/ResultContainer";
import ListItem from "../components/ListItem";
import AddModal from './AddModal';

function AllExpensesScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const allExpenses = getExpenses();
    const totalExpenses = getExpensesTotal(allExpenses);

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
                <ResultContainer title="All your expenses" value={totalExpenses}/>
                 <FlatList
                    data={allExpenses}
                    renderItem={({item}) => 
                        <ListItem id={item.id} name={item.name} value={item.value} date={item.date} />
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