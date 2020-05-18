class AnalyticsAbstract {
  static test() {
    console.log('This is static method of AnalyticsAbstract class');
  }

  saveEvent() {
    throw new Error('You have to implement the saveEvent method!');
  }

  setUser() {
    throw new Error('You have to implement the setUser method!');
  }
}

export default AnalyticsAbstract;
