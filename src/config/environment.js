import Immutable from 'seamless-immutable';

const environment = Immutable({
  development: __DEV__,
  test: __DEV__,
  production: __DEV__,
});

const redux = {
  logging: __DEV__,
};

export {
  environment,
  redux,
};
