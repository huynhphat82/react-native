class CrashlyticsAbstract {
  static test() {
    console.log('This is static method of CrashlyticsAbstract class');
  }

  saveCrash() {
    throw new Error('You have to implement the saveCrash method!');
  }

  recordCrash() {
    throw new Error('You have to implement the recordCrash method!');
  }
}

export default CrashlyticsAbstract;
