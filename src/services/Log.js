import RNFS from 'react-native-fs';
import { Analytics, Crashlytics } from './AnalyticsService';

const ALLOW_SHOW_LOG = true;
const LOG_FILE_NAME = 'app.log';
const LOG_FILE_PATH = RNFS.DocumentDirectoryPath + '/' + LOG_FILE_NAME;
const ENCODE = 'utf8';

const _prefixLog = () => {
  let o = new Date();
  return `${o.toLocaleDateString()} ${o.toLocaleTimeString()}`;
};

const _formatLine = contents => {
  if (typeof contents !== 'string' && typeof contents !== 'number') {
    contents = JSON.stringify(contents);
  }
  return `[${_prefixLog()}] ==========> ${contents}\n`;
};

const _showLog = (type, ...args) => ALLOW_SHOW_LOG && (typeof console[type] === 'function') && console[type](...args);

const Log = {};

Log.info  = (...args) => _showLog('log', ...args);
Log.warn  = (...args) => _showLog('warn', ...args);
Log.error = (...args) => _showLog('error', ...args);
Log.debug = (...args) => _showLog('debug', ...args);

/**
 * Write contents to the given log file
 * Notes: Old contents of the log file will be cleared
 *
 * @param string|number|object|array|json contents
 * @param string path
 * @return Promise<boolean>|void
 */
Log.writeNew = async (contents, path = null) => {
  try {
    return await RNFS.writeFile(path || LOG_FILE_PATH, contents, ENCODE);
  } catch (err) {
    Log.warn('Could not write the log file. Error: ', err);
  }
};

/**
 * Read the log file
 *
 * @param string path
 * @return Promise<string>|void
 */
Log.read = async (path = null) => {
  try {
    let contents = await RNFS.readFile(path || LOG_FILE_PATH, ENCODE);
    return contents;
  } catch (err) {
    Log.warn('Could not read logs. Error: ', err);
  }
};

/**
 * Write contents to the log file
 * Notes: contents will be appened
 *
 * @param string|number|object|array|json contents
 * @param string path
 * @return Promise<void>|void
 */
Log.write = async (contents, path = null) => {
  try {
    return await RNFS.appendFile(path || LOG_FILE_PATH, _formatLine(contents), ENCODE);
  } catch (err) {
    Log.warn('Could not write logs. Error: ', err);
  }
};

/**
 * Get the device storage information
 */
Log.getFSInfo = async () => {
  try {
    let result = await RNFS.getFSInfo();
    return result;
  } catch (err) {
    Log.warn('Could not get the device storage information. Error: ', err);
  }
};

Log.start = (contents = 'START') => Log.write(contents);
Log.end = (contents = 'END') => Log.write(contents);

Log.Analytics = Analytics;
Log.Crashlytics = Crashlytics;

Log.saveEvent = () => {
  console.log(Log.Analytics.test());
};

Log.setUserAnalytics = (params, attributes = null) => {
  Log.Analytics.setUser(params, attributes);
};

Log.saveCrash = (params = null) => {
  Log.Crashlytics.saveCrash(params);
};

Log.recordCrash = (params = null) => {
  Log.Crashlytics.recordCrash(params);
};

export default Log;
