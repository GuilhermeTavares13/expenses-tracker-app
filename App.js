import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, createBottomTabScreen } from '@react-navigation/bottom-tabs';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import IconButton from './components/IconButton';
import { Provider } from 'react-redux';
import store from './store/store';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator({
  screenOptions: {
    tabBarStyle: {
      backgroundColor: '#3518B7'
    },
    tabBarLabelStyle: {
      color: 'white'
    },
  },
  screens: {
    Recent: createBottomTabScreen({
      screen: RecentExpensesScreen,
      options: {
        title: 'Recent Expenses',
        tabBarIcon: () => {
          return <IconButton icon="hourglass" color="white" />
        },
        tabBarActiveBackgroundColor: '#F0BA2B'
      },
    }),
    AllExpenses: createBottomTabScreen({
      screen: AllExpensesScreen,
      options: {
        title: 'All Expenses',
        tabBarIcon: () => {
          return <IconButton icon="calendar" color="white" />
        },
        tabBarActiveBackgroundColor: '#F0BA2B'
      }
    }),
  },
});

const Navigation = createStaticNavigation(BottomTab);

export default function App() {
  return <Provider store={store}>
    <Navigation  />
  </Provider>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
