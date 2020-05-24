class PushNotificationAbstract {

  requestPermission() {
    throw new Error('You have to implement the requestPermission method!');
  }

  getToken() {
    throw new Error('You have to implement the getToken method!');
  }

  getNotifications() {
    throw new Error('You have to implement the getNotifications method!');
  }
}

export default PushNotificationAbstract;
