import AnalyticsAbstract from "../contracts/AnalyticsAbstract";

class AnalyticsGoogle extends AnalyticsAbstract {

  /**
   * @override
   */
  test() {
    return AnalyticsAbstract.test();
  }

  /**
   * @override
   */
  saveEvent(eventName, params) {
    console.log(eventName, params);
  }

  /**
   * @override
   */
  setUser(params) {
    console.log(params);
  }
}

export default AnalyticsGoogle;
