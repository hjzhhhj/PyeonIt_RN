import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp';
import Password from './screens/Password';
import NickName from './screens/NickName';
import Ready from './screens/Ready';
import Login from './screens/Login';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="NickName" component={NickName} />
        <Stack.Screen name="Ready" component={Ready} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name='Main' component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;