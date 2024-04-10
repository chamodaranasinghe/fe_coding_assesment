/**
Main entrypoint of the App
1. Encapsulate with Provider to provide the store to the app
2. Create a stack navigator to navigate between screens
3. Render the HomePage component as the initial screen
 */

import React from 'react';
import HomePage from './src/screens/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import MovieDetailPage from './src/screens/MovieDetailPage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="MovieDetailPage" component={MovieDetailPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
