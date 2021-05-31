import AbstractLogger from './AbstractLogger';

export default class Logger extends AbstractLogger {
  constructor() {
    super();
    this.isProd = process.env.NODE_ENV === 'production';
    this.isDev = process.env.NODE_ENV === 'development';
  }

  emergency() {
    return '';
  }
  alert() {
    return '';
  }
  critical() {
    return '';
  }
  error() {
    return '';
  }
  warning() {
    return '';
  }
  notice() {
    return '';
  }
  info() {
    return '';
  }
  debug() {
    return '';
  }
  log() {
    return '';
  }
}
