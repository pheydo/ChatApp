import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "../Screen/TransactionDetail";
import Home from "../Screen/Home";
import MyTabs from "./Tabnavigation";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      
    </Stack.Navigator>
  );
};
export default MyStack;
