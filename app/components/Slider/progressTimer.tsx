import React, {useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Text} from 'react-native-elements';
import {Tag} from '../../components';

type Color = [string, number];
type Colors = {
  0: Color;
} & Array<Color>;

interface Props {
  value?: number;
  size?: number;
  colors?: string | Colors;
  fontSize?: number;
  onRenderText?: Function;
  onComplete?: Function;
}

export const UrgeWithPleasureComponent = ({
  value = 10,
  size = 180,
  colors = [['#0cd', 1]],
  fontSize = 22,
  onRenderText = () => {},
  onComplete = () => {},
}: Props) => {
  const renderTime = (remainingTime: number) => {
    let time = `${Math.floor(remainingTime / 60)}:${(
      remainingTime % 60
    ).toFixed(0)}`;

    // onRenderText(time);
    useEffect(() => {
      console.log('useEffect called...');
      onRenderText(remainingTime);
      return () => {};
    }, []);
    return (
      // <View>

      //   {/* <Tag text={'tets'} /> */}
      // </View>

      <Animated.Text style={{color: 'white', fontSize: fontSize}}>
        {time}
      </Animated.Text>
    );
  };

  const RenderTag = () => {
    return <Text>testing tags</Text>;
  };

  return (
    <CountdownCircleTimer
      size={size}
      isPlaying
      duration={value}
      colors={colors}
      onComplete={() => onComplete()}>
      {({remainingTime, animatedColor}) => renderTime(remainingTime)}
    </CountdownCircleTimer>
  );
};
