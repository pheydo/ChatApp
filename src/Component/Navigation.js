import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionDetail from "../Screen/TransactionDetail";
import MyTabs from "./Tabnavigation";
import Welcomepage from "../Screen/welcomepage";
import Signup from "../Screen/Signup";
import Login from "../Screen/Login";
import Home from "../Screen/Home";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
       <Stack.Screen name="Welcomepage" component={Welcomepage} />
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
     
     
     
      

      

      
    </Stack.Navigator>
  );
};
export default MyStack;
