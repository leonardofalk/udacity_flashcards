import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd-mobile';

const LoadingSpinner = props => (
  <Icon
    type={props.icon}
    spin
    style={{
        fontSize: props.size,
        color: props.color,
      }}
  />
);

LoadingSpinner.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  icon: PropTypes.string,
  size: PropTypes.number,
};

LoadingSpinner.defaultProps = {
  color: '#1890FF',
  icon: 'loading',
  size: 24,
};

export default LoadingSpinner;
