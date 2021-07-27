import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Start} from '../screens';
import {APP_ROUTES} from './navigationConstant';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        screenOptions={{
          headerShown: false,

          headerStyle: {backgroundColor: '#111', height: 60},
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name={APP_ROUTES.Home} component={Home} />
        <Stack.Screen name={APP_ROUTES.Start} component={Start} />
      </Stack.Navigator> */}
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,

          headerStyle: {backgroundColor: '#111', height: 60},
        }}
        initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Start" component={Start} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
