import httpStatus from 'http-status';
import AbstractError from './AbstractError';

/**
 * @export
 * @class APIError
 * @extends AbstractError
 */
export default class APIError extends AbstractError {
  /**
   * Creates an API error.
   *
   * @constructor
   * @memberof APIError
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
    super(message, status, isPublic);
  }
}
