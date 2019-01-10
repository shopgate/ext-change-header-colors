import React from 'react';
import connect from './connector';

/**
 * Renders
 * @param {Object} AppBar AppBar
 * @param {bool} isHome isHome
 * @returns {Jsx}
 */
const HomeAppBar = ({ AppBar, isHome }) => {
  if (!isHome) {
    return <AppBar />;
  }
  return <AppBar backgroundColor="red" textColor="green" />;
};

export default connect(HomeAppBar);
