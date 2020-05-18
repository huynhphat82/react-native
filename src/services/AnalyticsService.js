import CrashlyticsGoogle from "./implements/CrashlyticsGoogle";
import AnalyticsGoogle from "./implements/AnalyticsGoogle";

export const Analytics = new AnalyticsGoogle();
export const Crashlytics = new CrashlyticsGoogle();

export default {
  Analytics,
  Crashlytics,
};
