/**
Main entrypoint of the App
 */

import NavigationContainer from '@react-navigation/native/lib/typescript/src/NavigationContainer';
import React from 'react';
import HomePage from './src/screens/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
