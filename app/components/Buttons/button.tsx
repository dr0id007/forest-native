import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  text?: string;
  onClick?: any;
}

export const Btn = ({text, onClick}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 5,
    padding: 5,
    borderRadius: 10,
  },
});
