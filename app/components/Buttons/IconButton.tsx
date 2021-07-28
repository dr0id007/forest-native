import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';
import {Icon} from 'react-native-elements';

interface Props {
  text?: string;
  onClick?: ((event: GestureResponderEvent) => void) | undefined;
  icon?: string;
  type?: string;
  color?: string;
}

export const IconBtn = ({
  text,
  icon,
  type = 'font-awesome-5',
  color = 'black',
  onClick,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onClick}
      activeOpacity={0.7}>
      {icon ? <Icon color={color} name={icon} type={type} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    // backgroundColor: '#67D1AD',
    // margin: 10,
    // padding: 10,
    // paddingHorizontal: 25,
    // borderRadius: 8,
    // borderBottomColor: '#278064',
    // borderBottomWidth: 4,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
