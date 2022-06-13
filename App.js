// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// import Profile from './src/Screen/Profile'

// const Tab = createBottomTabNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="profile" component={Profile} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }




import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/Component/Tabnavigation'
import MyStack from './src/Component/Navigation';
// import MyStack from './src/Component/Navigation'













export default function App() {
  return (
    <NavigationContainer>
      <MyStack />

      
    </NavigationContainer>

  );
}
