/**
 * @api Application Abstract Error class.
 *
 * @export
 * @class AbstractError
 * @extends Error
 */
export default class AbstractError extends Error {
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
