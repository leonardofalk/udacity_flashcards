import { development } from '../config/environment';

const { log } = console;

export default (...args) => {
  if (development) {
    log(...args);
  }
};
