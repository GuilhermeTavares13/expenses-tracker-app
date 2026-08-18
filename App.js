import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator, createBottomTabScreen } from '@react-navigation/bottom-tabs';
import RecentExpensesScreen from './screens/RecentExpenses/index';
import AllExpenses from './screens/AllExpenses';
import IconButton from './components/IconButton';
import { Provider } from 'react-redux';
import store from './store/store';
import { colors } from './utils/colors';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator({
  screenOptions: {
    tabBarStyle: {
      backgroundColor: colors.lightBlue
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
        tabBarActiveBackgroundColor: colors.activeTab
      },
    }),
    AllExpenses: createBottomTabScreen({
      screen: AllExpenses,
      options: {
        title: 'All Expenses',
        tabBarIcon: () => {
          return <IconButton icon="calendar" color="white" />
        },
        tabBarActiveBackgroundColor: colors.activeTab
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
