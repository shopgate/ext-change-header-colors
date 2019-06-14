import React from 'react';
import connect from './connector';
import { HEADER_BACKGROUND_COLOR, HEADER_COLOR } from '../../constants';

/**
 * Renders AppBar
 * @param {Object} AppBar AppBar
 * @param {boolean} changeHeader changeHeader
 * @returns {Jsx}
 */
const AppBar = ({ children, changeHeader }) => {
  if (!changeHeader) {
    return children;
  }

  return React.cloneElement(children, {
    backgroundColor: HEADER_BACKGROUND_COLOR,
    textColor: HEADER_COLOR,
  });
};

export default connect(AppBar);
