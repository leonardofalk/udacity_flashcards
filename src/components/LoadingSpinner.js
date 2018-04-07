import React from 'react';
import { ActivityIndicator } from 'react-native';

const LoadingSpinner = props => (
  <ActivityIndicator {...props} />
);

LoadingSpinner.propTypes = ActivityIndicator.propTypes;

LoadingSpinner.defaultProps = {
  ...ActivityIndicator.defaultProps,
  color: '#1890FF',
  size: 60,
};

export default LoadingSpinner;
