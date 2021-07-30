import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Header} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Timeline from 'react-native-timeline-flatlist';
import {data} from '../../mockdata/timeline';

interface Props {}

export const TimelineView = (props: Props) => {
  const [timeline, setTimeline] = useState([]);
  const navigation = useNavigation();

  // fetch previous sessions:
  useEffect(() => {});

  const onPress = () => {
    navigation.navigate('Home');
  };

  const renderDetail = (rowData, sectionID, rowID) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>;
    var desc = null;
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{uri: rowData.imageUrl}} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
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
          data={data}
          // separator
          showTime={true}
          lineColor={'#007AFF'}
          circleColor={'#007AFF'}
          innerCircle={'icon'}
          renderDetail={renderDetail}
          onEventPress={() => {}}
          timeContainerStyle={{minWidth: 72}}
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
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
    color: 'gray',
  },
});
