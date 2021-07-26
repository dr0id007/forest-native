import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

type Color = [string, number];
type Colors = {
  0: Color;
} & Array<Color>;

interface Props {
  value?: number;
  size?: number;
  colors?: string | Colors;
  fontSize?: number;
}

export const UrgeWithPleasureComponent = ({
  value = 10,
  size = 180,
  colors = [['#0cd', 1]],
  fontSize = 22,
}: Props) => (
  <CountdownCircleTimer size={size} isPlaying duration={value} colors={colors}>
    {({remainingTime, animatedColor}) => (
      <Animated.Text style={{color: animatedColor, fontSize: fontSize}}>
        {/* {Math.floor(remainingTime / 60)} */}
        {Math.floor(remainingTime / 60)}:{(remainingTime % 60).toFixed(0)}
      </Animated.Text>
    )}
  </CountdownCircleTimer>
);
