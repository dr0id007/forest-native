import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Btn, Header, ModalComponent} from '../../components';
import {TimerClock} from './timerClock';
import {animeQuotes} from '../../constants/animeQuotes';
import {Modalize} from 'react-native-modalize';

interface Props {}

export const Home = (props: Props) => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const modalizeRef = useRef<Modalize>(null);

  const onOpenModal = () => {
    console.log('open modal called.');
    modalizeRef.current?.open();
  };

  const onSetTimer = () => {
    console.log('set timer called..');
    setIsRunning(true);
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
      <ModalComponent modalizeRef={modalizeRef} />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>{animeQuotes[1].text}</Text>
        <Text style={styles.subHeading}>{animeQuotes[1].anime}</Text>
        <TimerClock
          isRunning={isRunning}
          timer={timer}
          setTime={setTimer}
          onTimerPress={onOpenModal}
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
