import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components';
import {useNavigation} from '@react-navigation/native';

interface Props {}

export const Settings = (props: Props) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.goBack();
  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <Header
        icon={'close'}
        iconType={'material'}
        title={'settings'}
        onIconPress={onPress}
      />
    </View>
  );
};
