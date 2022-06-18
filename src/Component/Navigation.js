import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetail from "../Screen/TransactionDetail";
import MyTabs from "./Tabnavigation";
import Welcomepage from "../Screen/welcomepage";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      <Stack.Screen name="Welcomepage" component={Welcomepage} />

      

      
    </Stack.Navigator>
  );
};
export default MyStack;
