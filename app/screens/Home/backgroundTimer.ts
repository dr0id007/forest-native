import BackgroundTimer from 'react-native-background-timer';
import {
  LocalNotification,
  removeAllDeliveredNotifications,
} from '../../components';
import {addSeconds, getTime} from 'date-fns';

interface Props {
  run?: Function;
  totalTime?: number;
}

// optimize this
const convertToTime = (time: number) => {
  time = time / 1000;
  return `${Math.floor(time / 60)}:${(time % 60).toFixed(0)}`;
};

export const runBackgroundTimer = ({run = () => {}, totalTime = 10}: Props) => {
  let endTime = getTime(addSeconds(Date.now(), totalTime));

  // clear previous notification
  removeAllDeliveredNotifications();

  BackgroundTimer.runBackgroundTimer(() => {
    //   run(time);
    LocalNotification({
      id: 1,
      channelId: '1',
      message: `Time Remaining: ${convertToTime(endTime - Date.now())}`,
    });
  }, 1000);
};

export const stopBackgroundTimer = () => {
  // clear previous notification
  removeAllDeliveredNotifications();

  BackgroundTimer.stopBackgroundTimer();
};
