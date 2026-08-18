import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';
import IconButton from "../../components/IconButton";
import { getExpensesTotal, getExpenses } from "../../utils/utilities";
import ResultContainer from "../../components/Result";
import ListItem from "../../components/ListItem";
import AddExpense from '../AddExpense';
import ModalItem from "../../components/ModalItem";
import { styles } from "./styles";
import { colors } from "../../utils/colors";

function AllExpenses() {
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
                backgroundColor: colors.lightBlue,
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

            <ModalItem visible={modalVisible} >
                <AddExpense onModal={setModalVisible}/>
            </ModalItem>
        </> 
    );
}

export default AllExpenses;

