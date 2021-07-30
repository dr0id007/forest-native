import React, {useEffect} from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Start, Settings, TimelineView, Tags} from '../screens';
import {APP_ROUTES} from './navigationConstant';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const {height} = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{justifyContent: 'space-around', flex: 1}}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <View style={{display: 'flex', justifyContent: 'flex-start'}}>
        <Text style={styles.footerText}>{'Shinobi Forest'}</Text>
        <Text style={styles.footerText}>{'1.1.0'}</Text>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  footerText: {
    textAlign: 'center',
    padding: 5,
    fontSize: 16,
    color: 'white',
  },
});

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
        initialRouteName="Home"
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name={APP_ROUTES.Home} component={Home} />
        {/* <Drawer.Screen name={APP_ROUTES.Start} component={Start} /> */}
        <Drawer.Screen name={APP_ROUTES.Timeline} component={TimelineView} />
        {/* <Drawer.Screen name={APP_ROUTES.Tags} component={Tags} /> */}
        <Drawer.Screen name={APP_ROUTES.Settings} component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
