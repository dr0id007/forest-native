import React from 'react';
import {View} from 'react-native';
import {Header, ListItem, CardWrapper, Hr, Footer} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  toggleNotification,
  toggleSound,
  toggleWifiOnly,
  toggleSendUsage,
} from '../../redux/settings/actions';

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

  const dispatchWifiOnly = () => {
    dispatch(toggleWifiOnly({notifications: !settingsState.wifiOnly}));
  };
  const dispatchSendUsage = () => {
    dispatch(toggleSendUsage({sound: !settingsState.sendUsage}));
  };

  const Divider = () => {
    return <Hr color={'#E8E8E8'} />;
  };

  let switchColor = '#75B6A0';

  return (
    <View style={{backgroundColor: '#E3E3E3', flex: 1}}>
      <Header
        icon={'close'}
        iconType={'material'}
        title={'settings'}
        onIconPress={onPress}
        backgroundColor={'#306E57'}
      />
      {/* sound and notifications */}
      <CardWrapper
        title={'Sound and notifications'}
        icon={'notifications-active'}>
        <>
          <ListItem
            text={'Notification'}
            value={settingsState.notifications}
            onToggle={dispatchNotification}
            switchColor={switchColor}
          />
          <Divider />
          <ListItem
            text={'Sound Alerts'}
            value={settingsState.sound}
            onToggle={dispatchSound}
            switchColor={switchColor}
          />
        </>
      </CardWrapper>

      {/* others */}
      <CardWrapper title={'Other'} icon={'settings'}>
        <>
          <ListItem
            text={'Connect only on Wi-Fi'}
            value={settingsState.wifiOnly}
            onToggle={dispatchWifiOnly}
            switchColor={switchColor}
          />
          <Divider />
          <ListItem
            text={'Automatically send usage and crash reports'}
            value={settingsState.sendUsage}
            onToggle={dispatchSendUsage}
            switchColor={switchColor}
          />
        </>
      </CardWrapper>

      {/* about */}
      <CardWrapper title={'About Us'} icon={'person'}>
        <>
          <ListItem text={'FAQ and Support'} isSwitch={false} />
          <Divider />

          <ListItem text={'Rate our app'} isSwitch={false} />
          <Divider />

          <ListItem text={'Privacy Policy'} isSwitch={false} />
          <Divider />

          <ListItem text={'Contact'} isSwitch={false} />
        </>
      </CardWrapper>

      <Footer />
    </View>
  );
};
