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
}

export const Btn = ({text, icon, onClick}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onClick}
      activeOpacity={0.7}>
      <Text style={styles.text}>{text}</Text>
      {icon ? <Icon name={icon} /> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    fontSize: 18,
  },
});
