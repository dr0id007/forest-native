import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Btn} from '../../components';
import {TimerClock} from './timerClock';

interface Props {}

export const Home = (props: Props) => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const onSetTimer = () => {
    console.log('set timer called..');
    setIsRunning(true);
    // set the timer state from false to true
  };

  const onCancel = () => {
    console.log('on cancel called...');
    setIsRunning(false);
    // restart state
  };

  return (
    <SafeAreaView>
      <TimerClock isRunning={isRunning} timer={timer} setTime={setTimer} />
      <View style={styles.buttonContainer}>
        <Btn text={'Set Timer'} onClick={onSetTimer} />
        <Btn text={'Cancel'} onClick={onCancel} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {},
});
