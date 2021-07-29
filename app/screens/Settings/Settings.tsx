import React from 'react';
import {View} from 'react-native';
import {Header, ListItem, CardWrapper, Hr} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleNotification, toggleSound} from '../../redux/settings/actions';

interface Props {}

export const Settings = (props: Props) => {
  const navigation = useNavigation();
  const settingsState = useSelector(state => state.settings);
  const dispatch = useDispatch();

  const onPress = () => {
    navigation.navigate('Home');
  };
  const dispatchNotification = () => {
    dispatch(toggleNotification({notifications: !settingsState.notifications}));
  };
  const dispatchSound = () => {
    dispatch(toggleSound({sound: !settingsState.sound}));
  };

  return (
    <View style={{backgroundColor: 'black'}}>
      <Header
        // style={{backgroundColor: 'red'}}
        icon={'close'}
        iconType={'material'}
        title={'settings'}
        onIconPress={onPress}
      />
      <CardWrapper title={'settings1'} icon={'camera'}>
        <>
          <ListItem
            text={'Show Notifications'}
            value={settingsState.notifications}
            onToggle={dispatchNotification}
          />
          {/* <Hr /> */}
          <ListItem
            text={'Sound Alerts'}
            value={settingsState.sound}
            onToggle={dispatchSound}
          />
          {/* <Hr /> */}
          <ListItem />
          {/* <Hr /> */}
          <ListItem />
        </>
      </CardWrapper>
    </View>
  );
};
