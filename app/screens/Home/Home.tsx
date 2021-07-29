import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import {
  Btn,
  Header,
  ModalWrapper,
  LocalNotification,
  Tag,
  Confetti,
} from '../../components';
import {TimerClock} from './timerClock';
import {animeQuotes} from '../../constants/animeQuotes';
import {Modalize} from 'react-native-modalize';
import {runBackgroundTimer, stopBackgroundTimer} from './backgroundTimer';
import {useSelector, useDispatch} from 'react-redux';
import {setTimer, setAngle} from '../../redux/timer/actions';

interface Props {}

export const Home = (props: Props) => {
  // isrunning in context
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState<boolean>(true);
  const modalizeRef = useRef<Modalize>(null);
  const timerState = useSelector(state => state.timer);
  const dispatch = useDispatch();

  // will add later

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', () => {
  //     // Alert.alert('test');
  //     return true;
  //   });
  //   return () =>
  //     BackHandler.removeEventListener('hardwareBackPress', () => true);
  // }, []);

  const showNotification = (time?: string) => {
    LocalNotification({
      // ongoing: true,
      id: 1,
      channelId: '1',
      message: `Time Remaining:  ${time}`,
    });
  };

  const showNotificationInBackground = (time?: string) => {
    runBackgroundTimer({
      run: () =>
        LocalNotification({
          // ongoing: true,
          id: 1,
          channelId: '1',
          message: `Time Remaining:  ${time}`,
        }),
      totalTime: time ? parseInt(time) : undefined,
    });
  };

  const setTime = (time: number) => {
    dispatch(setTimer({time}));
  };

  const onOpenModal = () => {
    modalizeRef.current?.open();
  };

  const onSetTimer = () => {
    setIsRunning(true);
  };

  const onSetAngle = (angle: number) => {
    dispatch(setAngle({angle}));
  };

  const onReset = () => {
    setIsRunning(false);
    stopBackgroundTimer();
  };

  const onFinish = () => {
    setIsRunning(false);
    stopBackgroundTimer();
  };

  const onPause = () => {
    console.log('pause the clock.');
  };

  const onComplete = () => {
    console.log('onComplete called...');
    setShowConfetti(true);
    stopBackgroundTimer();
  };

  const onConfettiComplete = () => {
    setShowConfetti(false);
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {showConfetti ? <Confetti onComplete={onConfettiComplete} /> : null}
      <ModalWrapper modalizeRef={modalizeRef} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>{animeQuotes[1].text}</Text>
        <Text style={styles.subHeading}>{animeQuotes[1].anime}</Text>
        <TimerClock
          isRunning={isRunning}
          timer={timerState.time}
          setTime={setTime}
          onTimerPress={onOpenModal}
          onRenderText={showNotificationInBackground}
          angle={timerState.angle}
          setAngle={onSetAngle}
          onComplete={onComplete}
        />
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

        {/* <Tag text={'sdf'} /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#50A387', flex: 1},
  mainContainer: {
    marginTop: 50,
  },
  heading: {
    textAlign: 'left',
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 30,
    paddingBottom: 5,
  },
  subHeading: {
    textAlign: 'right',
    paddingHorizontal: 30,
    color: 'white',
    fontSize: 18,
    paddingBottom: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
