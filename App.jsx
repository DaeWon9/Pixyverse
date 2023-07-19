import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './src/screens/beforeLogin/Start';
import Login from './src/screens/beforeLogin/Login';
import ImagePicker from './src/screens/afterLogin/ImagePicker';
import SignUp from './src/screens/beforeLogin/SignUp';
import Home from './src/screens/afterLogin/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Start} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
