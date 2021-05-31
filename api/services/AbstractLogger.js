/**
 * Application AbstractLogger class.
 *
 * @export
 * @class AbstractLogger
 */
export default class AbstractLogger {
  /**
   * AbstractLogger constructor.
   *
   * @constructor
   * @memberof AbstractLogger
   */
  constructor() {
    if (new.target === AbstractLogger) {
      throw new TypeError('Cannot construct Abstract instances directly.');
    }

    this.emergency();
    this.alert();
    this.critical();
    this.error();
    this.warning();
    this.notice();
    this.info();
    this.debug();
    this.log();
  }

  /**
   * System is unusable.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  emergency(message = '', context = []) {
    return this.implementationRequired('emergency');
  }

  /**
   * Action must be taken immediately.
   *
   * @example Entire website down, database unavailable, etc. This should
   *          trigger the SMS alerts and wake you up.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  alert(message = '', context = []) {
    return this.implementationRequired('alert');
  }

  /**
   * Critical conditions.
   *
   * @example Application component unavailable, unexpected exception.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  critical(message = '', context = []) {
    return this.implementationRequired('critical');
  }

  /**
   * Runtime errors that do not require immediate action but should typically
   * be logged and monitored.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  error(message = '', context = []) {
    return this.implementationRequired('error');
  }

  /**
   * Exceptional occurrences that are not errors.
   *
   * @example Use of deprecated APIs, poor use of an API, undesirable things
   *          that are not necessarily wrong.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  warning(message = '', context = []) {
    return this.implementationRequired('warning');
  }

  /**
   * Normal but significant events.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  notice(message = '', context = []) {
    return this.implementationRequired('notice');
  }

  /**
   * Interesting events.
   *
   * @example User logs in, SQL logs.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  info(message = '', context = []) {
    return this.implementationRequired('info');
  }

  /**
   * Detailed debug information.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {string} message
   * @param {array} context
   * @return {Error}
   */
  debug(message = '', context = []) {
    return this.implementationRequired('debug');
  }

  /**
   * Logs with an arbitrary level.
   *
   * @desc Method is considered abstract and must be implemented by child/subclass.
   *
   * @param {*} level
   * @param {*} message
   * @param {*} context
   * @return {Error}
   */
  log(level = '', message, context = []) {
    return this.implementationRequired('log');
  }

  /**
   * Throws error if method not implemented.
   *
   * @param {*} methodName name of method we are throwing error for.
   * @throws Error
   */
  implementationRequired(methodName) {
    throw new Error(`You have to implement the method ${methodName}!`);
  }
}
