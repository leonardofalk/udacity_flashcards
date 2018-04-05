const development = __DEV__;
const test = __DEV__;
const production = !development;

const environment = production ? 'production' : 'development';

const redux = {
  logging: development,
};

export {
  environment,
  development,
  test,
  production,
  redux,
};
