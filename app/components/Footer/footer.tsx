import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

interface Props {
  color?: string;
  backgroundColor?: string;
}

export const Footer = ({
  color = 'black',
  backgroundColor = 'transparent',
}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.text, {color}]}>Shinobi Forest</Text>
      <Text style={[styles.text, {color}]}> v 1.1.0 </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  text: {
    textAlign: 'center',
  },
});
