import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {Header, TimelineCard} from '../../components';
import {useNavigation} from '@react-navigation/native';

const mock = [
  {
    time: '10 min',
    start_date: '21-07-2021 12pm',
    completed: true,
    duration: '10min',
  },
  {
    time: '10 min',
    start_date: '21-07-2021 12pm',
    completed: true,
    duration: '10min',
  },
  {
    time: '10 min',
    start_date: '21-07-2021 12pm',
    completed: true,
    duration: '10min',
  },
];

interface Props {}

export const Timeline = (props: Props) => {
  const [timeline, setTimeline] = useState([]);
  const navigation = useNavigation();

  // fetch previous sessions:
  useEffect(() => {});

  const onPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <Header
        // style={{backgroundColor: 'red'}}
        icon={'close'}
        iconType={'material'}
        title={'timeline'}
        onIconPress={onPress}
      />
      {mock.map((data, index) => {
        return (
          <TimelineCard
            time={data.time}
            completed={data.completed}
            start_date={data.start_date}
          />
        );
      })}
    </View>
  );
};
