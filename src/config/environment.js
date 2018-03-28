const development = test = __DEV__;
const production = !development;

const environment = production ? 'production' : 'development';

const redux = {
  logging: __DEV__,
};

export {
  environment,
  development,
  test,
  production,
  redux,
};
