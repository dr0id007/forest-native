import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Switch} from 'react-native-elements';

interface Props {
  text?: string;
  onToggle?: Function;
  value?: boolean;
}

export const ListItem = ({
  text = 'Custom Button',
  value = false,
  onToggle = () => {},
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Switch value={value} onChange={() => onToggle()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#666666',
    fontWeight: '100',
    fontSize: 14,
  },
});
