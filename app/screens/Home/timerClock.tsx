import React, {useState} from 'react';
import {View} from 'react-native';
import {UrgeWithPleasureComponent} from '../../components';
import CircleSlider from '../../components/Slider/circleSlider';

interface Props {
  isRunning: boolean;
  timer: number;
  onClick?: Function;
  setTime?: Function;
  onTimerPress?: Function;
  onRenderText?: Function;
  angle?: number;
  setAngle?: Function;
}

export const TimerClock = ({
  isRunning,
  timer,
  setTime,
  onTimerPress,
  onRenderText = () => {},
  angle = 0,
  setAngle = () => {},
}: Props) => {
  if (isRunning)
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{paddingTop: 53, paddingBottom: 10}}>
          <UrgeWithPleasureComponent
            size={300}
            value={timer * 60}
            fontSize={35}
            onRenderText={onRenderText}
          />
        </View>
      </View>
    );

  return (
    <CircleSlider
      time={timer}
      setTime={setTime}
      dialRadius={145}
      strokeWidth={10}
      dialWidth={10}
      onTextPress={onTimerPress}
      angle={angle}
      setAngle={setAngle}
    />
  );
};
