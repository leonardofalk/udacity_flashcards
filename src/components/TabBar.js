import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabBar as AntTabBar, Icon } from 'antd-mobile';

// import styles from './styles/TabBar';

const TabItem = AntTabBar.Item;

class TabBar extends Component {
  _renderRoutes = () => {
    const { navigation } = this.props;
    const { routes, index } = navigation.state;

    return routes.map(({ key, routeName }, idx) => (
      <TabItem
        title={routeName}
        key={key}
        selected={index === idx}
        onPress={() => (
          navigation.navigate(routeName)
        )}
        icon={<Icon type="file-add" />}
      />
    ));
  }

  render = () => (
    <AntTabBar>
      {this._renderRoutes()}
    </AntTabBar>
  )
}

TabBar.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TabBar;
