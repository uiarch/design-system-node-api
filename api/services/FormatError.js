/**
 * Error formatting class.
 *
 * @export
 * @class FormatError
 */
export default class FormatError {
  /**
   * Make error pretty
   *
   * @static
   * @param {Array} errors - Array of error Object
   * @return {Object} - errors - Pretty Object transform
   */
  static makePretty(errors) {
    return errors.reduce((obj, error) => {
      const nObj = obj;
      nObj[error.field] = error.messages[0].replace(/"/g, '');
      return nObj;
    }, {});
  }
}
