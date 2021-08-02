import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  BackHandler,
  ToastAndroid,
  ImageBackground,
  Dimensions,
  Image,
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
import {
  setTimer,
  setAngle,
  startTimer,
  stopTimer,
} from '../../redux/timer/actions';
import {saveSession} from '../../redux/session/actions';

interface Props {}

const {width, height} = Dimensions.get('window');

export const Home = (props: Props) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const modalizeRef = useRef<Modalize>(null);
  const timerState = useSelector(state => state.timer);
  const tagsState = useSelector(state => state.tags);
  const dispatch = useDispatch();

  // will add later

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      ToastAndroid.showWithGravityAndOffset(
        'A wild toast appeared!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      return true;
    });
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => true);
  }, []);

  const showNotificationInBackground = (time?: string) => {
    runBackgroundTimer({
      run: () =>
        LocalNotification({
          ongoing: true,
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
    dispatch(startTimer());
  };

  const onSetAngle = (angle: number) => {
    dispatch(setAngle({angle}));
  };

  const onReset = () => {
    dispatch(stopTimer());
    stopBackgroundTimer();
  };

  const onGiveUp = () => {
    dispatch(stopTimer());
    stopBackgroundTimer();
    dispatch(
      saveSession({
        currentSession: {
          // id: '1',
          duration: timerState.duration,
          startTime: timerState.startTime,
          date: Date.now().toString(),
          completed: false,
          tag: tagsState.currentTag,
        },
      }),
    );
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
    dispatch(stopTimer());
    setShowConfetti(false);
    dispatch(
      saveSession({
        currentSession: {
          // id: '1',
          duration: timerState.duration,
          startTime: timerState.startTime,
          date: Date.now().toString(),
          completed: true,
          tag: tagsState.currentTag,
        },
      }),
    );
  };

  return (
    <SafeAreaView style={[styles.container, , {backgroundColor: '#50A387'}]}>
      {/* <SafeAreaView style={[styles.container, {backgroundColor: '#50A387'}]}> */}
      {/* <ImageBackground
        // 6
        // 7
        // 8
        source={require('../../assets/images/avatar/avatar1.gif')}
        resizeMode="cover"
        style={styles.image}> */}
      <Header
        rightIcon={'coin'}
        rightText={'3/10'}
        backgroundColor={'#50A387'}
      />
      {showConfetti ? <Confetti onComplete={onConfettiComplete} /> : null}
      <ModalWrapper modalizeRef={modalizeRef} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>{animeQuotes[1].text}</Text>
        <Text style={styles.subHeading}>{animeQuotes[1].anime}</Text>
        <TimerClock
          isRunning={timerState.isRunning}
          timer={timerState.time}
          setTime={setTime}
          onTimerPress={onOpenModal}
          onRenderText={showNotificationInBackground}
          angle={timerState.angle}
          setAngle={onSetAngle}
          onComplete={onComplete}
        />
        <View style={styles.buttonContainer}>
          {timerState.isRunning ? (
            <>
              <Btn text={'Pause'} onClick={onPause} />
              <Btn text={'Give Up'} onClick={onGiveUp} />
            </>
          ) : (
            <>
              <Btn text={'Start'} onClick={onSetTimer} />
              <Btn text={'Reset'} onClick={onReset} />
            </>
          )}
        </View>
        {timerState.isRunning ? (
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/avatar/avatar1.gif')}
              style={styles.avatar}
            />
          </View>
        ) : null}

        {/* <Tag text={'sdf'} /> */}
      </View>
      {/* </ImageBackground> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  mainContainer: {
    marginTop: 50,
    flex: 1,
  },
  image: {
    width,
    height,
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
  avatarContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  avatar: {
    backgroundColor: 'red',
    height: 150,
    width: 180,
  },
});
