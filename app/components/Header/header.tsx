import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
// import {
//   DrawerNavigationProp,
//   createDrawerNavigator,
// } from '@react-navigation/drawer';

interface Props {}

export const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon} onPress={toggleDrawer}>
        <Icon style={styles.menuIcon} name="menu" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuIcon: {
    padding: 10,
  },
});
