import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Timeline from 'react-native-timeline-flatlist';
import {data} from '../../mockdata/timeline';
import {useSelector, useDispatch} from 'react-redux';
import {fetchHistory, deleteSession} from '../../redux/session/actions';
import {SessionType} from '../../redux/session/types';

interface Props {}

export const TimelineView = (props: Props) => {
  const [timeline, setTimeline] = useState([]);
  const navigation = useNavigation();
  const sessionState = useSelector(state => state.session);
  const dispatch = useDispatch();

  console.log('zxcxzc', sessionState);
  // fetch previous sessions:
  useEffect(() => {
    dispatch(fetchHistory());
  }, []);

  const onPress = () => {
    navigation.navigate('Home');
  };

  function formatSessionData<Type>(sessions: Type[]): Type {
    const formatData = sessions.map((session: SessionType, index: number) => {
      return {
        ...session,
        time: '11:00 am',
      };
    });
    setTimeline(formatData);
  }

  useEffect(() => {
    if (sessionState.sessions) formatSessionData(sessionState.sessions);
  }, [sessionState.sessions]);

  const renderDetail = (rowData, sectionID, rowID) => {
    let title = (
      <Text style={[styles.title]}>
        {rowData.completed}
        {'Study'}
      </Text>
    );
    var desc = null;
    console.log('rowData', rowData);
    if (rowData)
      desc = (
        <View style={styles.descriptionContainer}>
          {/* <Image source={{uri: rowData.imageUrl}} style={styles.image} /> */}
          <Image
            source={require('../../assets/images/bg/1.jpg')}
            style={styles.image}
          />
          <Text style={[styles.textDescription]}>{rowData.date}</Text>
          <Text style={[styles.textDescription]}>{rowData.start_time}</Text>
          <Text style={[styles.textDescription]}>{rowData.duration}</Text>
        </View>
      );

    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Header
        icon={'close'}
        iconType={'material'}
        title={'timeline'}
        onIconPress={onPress}
      />
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={timeline}
          // separator
          showTime={true}
          lineColor={'#007AFF'}
          circleColor={'#007AFF'}
          innerCircle={'icon'}
          renderDetail={renderDetail}
          onEventPress={() => {}}
          timeContainerStyle={{minWidth: 72}}
          // rowContainerStyle={styles.listView}
          // eventDetailStyle={styles.listView}
          detailContainerStyle={styles.listView}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  listView: {
    backgroundColor: 'grey',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    // color: 'gray',
    color: 'black',
  },
});
