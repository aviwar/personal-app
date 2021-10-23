import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

import HomeScreen from "../screens/Home";
import TransactionsScreen from "../screens/Transactions";

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={HomeIcon} title="HOME" />
    <BottomNavigationTab icon={EmailIcon} title="TRANSACTIONS" />
    <BottomNavigationTab icon={BellIcon} title="REMINDERS" />
  </BottomNavigation>
);

const BottomTabNavigator = () => {
  return (
    <Navigator
      initialRouteName="Transactions"
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Transactions" component={TransactionsScreen} />
      <Screen name="Reminders" component={HomeScreen} />
    </Navigator>
  );
};

export default BottomTabNavigator;
