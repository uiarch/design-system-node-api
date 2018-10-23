import mongoose from 'mongoose';
import bluebird from 'bluebird';

/**
 * Database connection and settings.
 *
 * @export
 * @class Connect
 */
export default class Connect {
  /**
   * Creates an instance of Connect.
   *
   * @param {*} configs
   * @memberof Connect
   */
  constructor(configs) {
    this._configs = configs;
    mongoose.Promise = bluebird;
    this.setDebug();
  }

  /**
   * Mongoose set debug based on env.
   *
   * @memberof Connect
   */
  setDebug() {
    mongoose.set('debug', this._configs.APP_CONFIG.MONGOOSE_DEBUG);
  }

  /**
   * Connect database.
   *
   * @memberof Connect
   */
  initialize() {
    try {
      mongoose.connect(
        this._configs.DATABASE.CONNECT_URL,
        {useNewUrlParser: true},
      );
    } catch (error) {
      mongoose.createConnection(this._configs.DATABASE.CONNECT_URL);
    }

    mongoose.connection.once('open', () => console.log('MongoDB Running')).on('error', error => {
      throw error;
    });
  }
}
