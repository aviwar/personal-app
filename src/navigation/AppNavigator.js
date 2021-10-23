import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TopNavigator from "./TopNavigator";
import BottomTabNavigator from "./BottomTabNavigator";

import TransactionDetail from "../screens/TransactionDetail";
import AddTransaction from "../screens/AddTransaction";

const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator
      screenOptions={{
        header: (props) => <TopNavigator {...props} />,
      }}
    >
      <Screen name="BottomTab" component={BottomTabNavigator} />
      <Screen name="TransactionDetail" component={TransactionDetail} />
      <Screen name="AddTransaction" component={AddTransaction} />
    </Navigator>
  </NavigationContainer>
);
