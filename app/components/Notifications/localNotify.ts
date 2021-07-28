import PushNotification from 'react-native-push-notification';

// useful in development
PushNotification.removeAllDeliveredNotifications();

interface Props {
  id?: number;
  channelId?: string;
  message?: string;
  playSound?: boolean;
  ongoing?: boolean;
  priority?: 'high' | 'max' | 'low' | 'min' | 'default' | undefined;
  visibility?: 'private' | 'public' | 'secret' | undefined;
  vibrate?: boolean;
  showWhen?: boolean;
  autoCancel?: boolean;
}

export const LocalNotification = ({
  id = 1,
  channelId = '1',
  message = 'test message',
  playSound = false,
  ongoing = false,
  priority = 'high',
  visibility = 'private',
  vibrate = false,
  showWhen = false,
  autoCancel = true,
}: Props) => {
  PushNotification.localNotification({
    /* Android Only Properties */
    id,
    channelId,
    // ticker: 'My Notification Ticker', // (optional)
    showWhen, // (optional) default: true
    autoCancel, // (optional) default: true
    // largeIcon: 'ic_launcher', // (optional) default: "ic_launcher". Use "" for no large icon.
    // largeIconUrl: 'https://www.example.tld/picture.jpg', // (optional) default: undefined
    // smallIcon: 'ic_notification', // (optional) default: "ic_notification" with fallback for "ic_launcher". Use "" for default small icon.
    // bigText: 'My big text that will be shown when notification is expanded', // (optional) default: "message" prop
    // subText: 'This is a subText', // (optional) default: none
    // bigPictureUrl: 'https://www.example.tld/picture.jpg', // (optional) default: undefined
    // bigLargeIcon: 'ic_launcher', // (optional) default: undefined
    // bigLargeIconUrl: 'https://www.example.tld/bigicon.jpg', // (optional) default: undefined
    vibrate, // (optional) default: true
    ongoing, // (optional) set whether this is an "ongoing" notification
    priority, // (optional) set notification priority, default: high
    visibility, // (optional) set notification visibility, default: private
    ignoreInForeground: false, // (optional) if true, the notification will not be visible when the app is in the foreground (useful for parity with how iOS notifications appear). should be used in combine with `com.dieam.reactnativepushnotification.notification_foreground` setting
    onlyAlertOnce: true, // (optional) alert will open only once with sound and notify, default: false
    when: null, // (optional) Add a timestamp (Unix timestamp value in milliseconds) pertaining to the notification (usually the time the event occurred). For apps targeting Build.VERSION_CODES.N and above, this time is not shown anymore by default and must be opted into by using `showWhen`, default: null.
    usesChronometer: false, // (optional) Show the `when` field as a stopwatch. Instead of presenting `when` as a timestamp, the notification will show an automatically updating display of the minutes and seconds since when. Useful when showing an elapsed time (like an ongoing phone call), default: false.
    timeoutAfter: null, // (optional) Specifies a duration in milliseconds after which this notification should be canceled, if it is not already canceled, default: null
    messageId: 'google:message_id', // (optional) added as `message_id` to intent extras so opening push notification can find data stored by @react-native-firebase/messaging module.
    invokeApp: true, // (optional) This enable click on actions to bring back the application to foreground or stay in background, default: true
    playSound, // (optional) default: true
    message, // (required)
  });
};
