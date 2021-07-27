import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Btn, Header} from '../../components';
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
  const onReset = () => {
    setIsRunning(false);
  };

  const onFinish = () => {
    setIsRunning(false);
  };

  const onPause = () => {
    console.log('pause the clock.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.mainContainer}>
        <TimerClock isRunning={isRunning} timer={timer} setTime={setTimer} />
        <View style={styles.buttonContainer}>
          {isRunning ? (
            <>
              <Btn text={'Pause'} onClick={onPause} />
              <Btn text={'Finish'} onClick={onFinish} />
            </>
          ) : (
            <>
              <Btn text={'Start'} onClick={onSetTimer} />
              <Btn text={'Reset'} onClick={onReset} />
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'orange', flex: 1},
  mainContainer: {
    marginTop: 150,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
