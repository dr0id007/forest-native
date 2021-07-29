import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Start, Settings, TimelineView, Tags} from '../screens';
import {APP_ROUTES} from './navigationConstant';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#50A387',
          width: 190,
        }}
        drawerContentOptions={{
          activeTintColor: 'white',
          activeBackgroundColor: '#89C0AD',
          inactiveTintColor: 'white',
          itemStyle: {},
        }}
        initialRouteName="Home">
        <Drawer.Screen name={APP_ROUTES.Home} component={Home} />
        {/* <Drawer.Screen name={APP_ROUTES.Start} component={Start} /> */}
        <Drawer.Screen name={APP_ROUTES.Timeline} component={TimelineView} />
        <Drawer.Screen name={APP_ROUTES.Tags} component={Tags} />
        <Drawer.Screen name={APP_ROUTES.Settings} component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
