/**
 * Application AbstractError class.
 *
 * @export
 * @class AbstractError
 * @extends Error
 */
export default class AbstractError extends Error {
  /**
   * AbstractError constructor.
   *
   * @constructor
   * @memberof AbstractError
   * @param {string} message - Error message to be formatted.
   * @param {string} status - Error status
   * @param {boolean} isPublic - Is pubic error or not?
   */
  constructor(message, status, isPublic) {
    super(message);

    if (new.target === AbstractError) {
      throw new TypeError('Cannot construct Abstract instances directly.');
    }

    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.isPublic = isPublic;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor.name);
  }
}
