import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Switch, Card} from 'react-native-elements';

interface Props {
  time?: number | string;
  completed?: boolean;
  start_date?: string;
}

export const TimelineCard = ({time, completed, start_date}: Props) => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title>test</Card.Title>
      </Card>
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
