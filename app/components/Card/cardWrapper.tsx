import React from 'react';
import {ReactElement} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {Hr} from '../../components';

interface Props {
  title?: string;
  icon?: string;
  iconType?: string;
  children?: ReactElement;
}

export const CardWrapper = ({
  children,
  title,
  icon,
  iconType = 'material',
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {icon ? <Icon name={icon} type={iconType} size={24} /> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Hr />
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#F4F4F4',
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 2,
  },
  children: {
    paddingHorizontal: 10,
  },
});
