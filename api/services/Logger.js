import LoggerInterface from './LoggerInterface';

export default class Logger extends LoggerInterface {
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
