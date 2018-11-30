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
   * @param {String} message - Error message.
   * @param {Number} status - HTTP status code of error.
   * @param {Boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false) {
    super(message, status, isPublic);
  }
}
