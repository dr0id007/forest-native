import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Timeline from 'react-native-timeline-flatlist';
import {useSelector, useDispatch} from 'react-redux';
import {fetchHistory, deleteSession} from '../../redux/session/actions';
import {SessionType} from '../../redux/session/types';
import {format} from 'date-fns';

interface Props {}

interface ITimeline extends SessionType {
  time?: string;
}

export const TimelineView = (props: Props) => {
  const [timeline, setTimeline] = useState<ITimeline[]>([]);
  const navigation = useNavigation();
  const sessionState = useSelector(state => state.session);
  const dispatch = useDispatch();

  // console.log('zxcxzc', sessionState);
  // fetch previous sessions:
  useEffect(() => {
    dispatch(fetchHistory());
  }, []);

  const onPress = () => {
    navigation.navigate('Home');
  };

  function formatSessionData<Type>(sessions: Type[]) {
    const formatData = sessions.map((session: SessionType, index: number) => {
      return {
        ...session,
        // time: '11:00 am',
      };
    });
    console.log('len:', sessions.length);
    setTimeline(formatData);
  }

  useEffect(() => {
    if (sessionState.sessions) formatSessionData(sessionState.sessions);
  }, [sessionState.sessions]);

  const renderDetail = (rowData: ITimeline, sectionID, rowID) => {
    let title = (
      <Text style={[styles.title, {color: 'black'}]}>
        {rowData.date ? format(parseInt(rowData.date), 'mm:ss') : null}
        {'    '}
        {rowData.date ? format(parseInt(rowData.date), 'dd/mm/yy') : null}
      </Text>
    );
    var desc = null;
    // console.log('rowData', rowData);
    if (rowData) {
      let textStyle = [
        styles.textDescription,
        {
          color: 'black',
          // backgroundColor: 'green'
        },
      ];
      desc = (
        <View
          style={[
            styles.descriptionContainer,
            // styles.listView,
            // {backgroundColor: 'black'},
          ]}>
          {/* <Image source={{uri: rowData.imageUrl}} style={styles.image} /> */}

          <Text style={textStyle}>
            {/* time */}
            {rowData.completed
              ? "You've completed the sessin"
              : "You've drop the session"}
          </Text>

          {/* <Image
            source={require('../../assets/images/bg/1.jpg')}
            style={[styles.image]}
          /> */}

          <Text style={textStyle}>{rowData.tag}</Text>
        </View>
      );
    }

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
          // renderTime
          showTime={false}
          lineColor={'#007AFF'}
          circleColor={'#007AFF'}
          // innerCircle={'icon'}
          renderDetail={renderDetail}
          onEventPress={() => {}}
          timeContainerStyle={{minWidth: 50}}
          detailContainerStyle={[
            styles.listView,
            // {
            //   backgroundColor: '#50A387',
            // },
          ]}
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
    // padding: 10,
    margin: 10,
    marginTop: -10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flexDirection: 'column',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginTop: 10,
    // marginLeft: 10,
  },
});
