import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Start} from '../screens';
import {APP_ROUTES} from './navigationConstant';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,

          headerStyle: {backgroundColor: '#111', height: 60},
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name={APP_ROUTES.Home} component={Home} />
        <Stack.Screen name={APP_ROUTES.Start} component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
