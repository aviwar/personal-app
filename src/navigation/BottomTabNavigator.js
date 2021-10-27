import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/Home";
import TransactionsScreen from "../screens/Transactions";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const BottomTabNavigator = (props) => {
  return (
    <Navigator
      initialRouteName="Transactions"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: "home-account",
        }}
      />
      <Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{
          tabBarIcon: "account-multiple",
        }}
      />
      <Screen
        name="Reminders"
        component={HomeScreen}
        options={{
          tabBarIcon: "account-multiple",
        }}
      />
    </Navigator>
  );
};

export default BottomTabNavigator;
