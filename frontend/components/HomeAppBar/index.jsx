import React from 'react';
import connect from './connector';
import { HEADER_BACKGROUND_COLOR, HEADER_COLOR } from '../../constants';

/**
 * Renders HomeAppBar
 * @param {Object} AppBar AppBar
 * @param {bool} isHome isHome
 * @returns {Jsx}
 */
const HomeAppBar = ({ children, isHome }) => {
  if (!isHome) {
    return children;
  }
  return React.cloneElement(children, {
    backgroundColor: HEADER_BACKGROUND_COLOR,
    textColor: HEADER_COLOR,
  });
};

export default connect(HomeAppBar);
