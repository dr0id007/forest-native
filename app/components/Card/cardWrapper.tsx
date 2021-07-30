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
  color?: string;
  backgroundColor?: string;
}

export const CardWrapper = ({
  children,
  title,
  icon,
  iconType = 'material',
  color = '#333333',
  backgroundColor = '#F4F4F4',
}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View style={styles.row}>
        {icon ? (
          <Icon
            style={{paddingHorizontal: 10}}
            name={icon}
            type={iconType}
            size={24}
            color={color}
          />
        ) : null}
        <Text style={[styles.title, {color}]}>{title}</Text>
      </View>
      <Hr />
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 5,
    borderRadius: 10,
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
