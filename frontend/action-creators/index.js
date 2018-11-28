import {
  SET_NAVIGATOR_BACKGROUND,
  SET_NAVIGATOR_COLOR,
} from '../constants';

/**
 * Set Background Color action.
 * @param {string} color ProductId.
 * @returns {Object}
 */
export const setBackgroundColor = color => ({
  type: SET_NAVIGATOR_BACKGROUND,
  color,
});

/**
 * Set Color action.
 * @param {string} color ProductId.
 * @returns {Object}
 */
export const setColor = color => ({
  type: SET_NAVIGATOR_COLOR,
  color,
});
