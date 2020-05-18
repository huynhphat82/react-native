import CrashlyticsAbstract from "../contracts/CrashlyticsAbstract";

class CrashlyticsGoogle extends CrashlyticsAbstract {

  /**
   * @override
   */
  test() {
    return CrashlyticsAbstract.test();
  }

  /**
   * @override
   */
  saveCrash(params) {
    console.log(params);
  }

  /**
   * @override
   */
  recordCrash(params) {
    console.log(params);
  }
}

export default CrashlyticsGoogle;
