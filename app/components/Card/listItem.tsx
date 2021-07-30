import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Switch} from 'react-native-elements';

interface Props {
  text?: string;
  onToggle?: Function;
  value?: boolean;
  color?: string;
  switchColor?: string;
  isSwitch?: boolean;
}

export const ListItem = ({
  text = 'Custom Button',
  value = false,
  onToggle = () => {},
  color = '#666666',
  switchColor = '#666666',
  isSwitch = true,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {color}]}>{text}</Text>
      {isSwitch ? (
        <Switch value={value} color={switchColor} onChange={() => onToggle()} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 30,
  },
  text: {
    fontWeight: '100',
    fontSize: 14,
  },
});
