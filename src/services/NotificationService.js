import { Permissions, Notifications } from 'expo';
import { development } from '../config/environment';
import { getQuizLastTakenAt } from './APIService';

const clearNotifications = async () => Notifications.cancelAllScheduledNotificationsAsync();

const notificationDateTime = () => {
  const now = new Date();

  /* every 18:00 of each day */
  now.setDate(now.getDate() + 1);
  now.setHours(18);
  now.setMinutes(0);

  if (development) {
    /* from minute to minute */
    now.setDate(now.getDate());
    now.setHours(now.getHours());
    now.setMinutes(now.getMinutes() + 1);
  }

  return now;
};

const notificationSettings = () => ({
  title: 'Flashcards',
  body: "Don't forget to start a quiz today!!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

const restartNotificationService = () => {
  clearNotifications();
  setupNotification();
};

/* in development the expected behaviour is to bump a notification each minute */
const setupNotification = async () => {
  const { status } = Permissions.askAsync(Permissions.NOTIFICATIONS);

  if (status === 'granted') {
    const lastTakenQuizAt = getQuizLastTakenAt();
    const now = new Date();
    const diff = Math.abs(lastTakenQuizAt - now);

    if (diff >= 86400000) {
      await clearNotifications();

      Notifications.scheduleLocalNotificationAsync(
        notificationSettings(),
        {
          time: notificationDateTime(),
          repeat: 'day',
        },
      );
    }
  }
};

export {
  setupNotification,
  notificationSettings,
  notificationDateTime,
  clearNotifications,
  restartNotificationService,
};
