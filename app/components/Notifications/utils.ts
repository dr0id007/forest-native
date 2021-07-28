import PushNotification from 'react-native-push-notification';

type ChannelId = string;
type NotifiacationId = string;

export const getChannels = () => {
  return PushNotification.getChannels(channel_ids => {
    console.log(channel_ids);
    return channel_ids;
  });
};

export const channelExists = (channel_id: ChannelId) => {
  return PushNotification.channelExists(channel_id, function (exists) {
    console.log(exists);
    return exists;
  });
};

export const channelBlocked = (channel_id: ChannelId) => {
  return PushNotification.channelBlocked(channel_id, function (blocked) {
    console.log(blocked); // true/false
    return blocked;
  });
};

export const deleteChannel = (channel_id: ChannelId) => {
  PushNotification.deleteChannel(channel_id);
};

export const cancelLocalNotifications = (notificationId: NotifiacationId) => {
  PushNotification.cancelLocalNotifications({id: notificationId});
};

export const cancelAllLocalNotifications = () => {
  PushNotification.cancelAllLocalNotifications();
};

export const removeAllDeliveredNotifications = () => {
  PushNotification.removeAllDeliveredNotifications();
};

// -
export const getNotifications = (callback: () => {}) => {
  PushNotification.getDeliveredNotifications(callback);
};

export const removeDeliveredNotifications = (identifiers: []) => {
  PushNotification.removeDeliveredNotifications(identifiers);
};

export const getScheduledLocalNotifications = (callback: () => {}) => {
  PushNotification.getScheduledLocalNotifications(callback);
};

export const abandonPermissions = () => {
  PushNotification.abandonPermissions();
};
