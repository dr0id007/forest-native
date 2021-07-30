import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

interface Props {
  icon?: string;
  iconType?: string;
  title?: string;
  color?: string;
  onIconPress?: Function;
  rightIcon?: string;
  rightText?: string;
  backgroundColor?: string;
}

export const Header = ({
  icon = 'menu',
  iconType = 'material',
  title,
  color = 'white',
  onIconPress,
  rightIcon,
  rightText,
  backgroundColor = '#50A387',
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    navigation.toggleDrawer();
  };
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => (onIconPress ? onIconPress() : toggleDrawer())}>
        <Icon
          style={styles.menuIcon}
          name={icon}
          type={iconType}
          color={color}
        />
      </TouchableOpacity>
      <View style={styles.center}>
        <Text style={[styles.title, {color: color}]}>{title}</Text>
      </View>
      {rightText ? (
        <View style={styles.right}>
          <Text style={[styles.rightText, {color: color}]}>{rightText}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  menuButton: {
    padding: 20,
  },
  menuIcon: {},
  title: {
    fontSize: 20,
    paddingRight: 50,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  center: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  right: {
    padding: 20,
  },
  rightText: {
    textAlign: 'right',
    fontSize: 20,
  },
});
