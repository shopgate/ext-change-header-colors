import getConfig from './helpers/getConfig';

const {
  headerHomePageBackgroundColor,
  headerHomeTextColor,
  headerBackgroundColorDefault,
  headerTextColorDefault,
} = getConfig();

export const HEADER_BACKGROUND_COLOR = headerHomePageBackgroundColor || null;
export const HEADER_COLOR = headerHomeTextColor || null;
export const HEADER_BACKGROUND_COLOR_DEFAULT = headerBackgroundColorDefault || null;
export const HEADER_COLOR_DEFAULT = headerTextColorDefault || null;
export const SET_NAVIGATOR_BACKGROUND = 'SET_NAVIGATOR_BACKGROUND';
export const SET_NAVIGATOR_COLOR = 'SET_NAVIGATOR_COLOR';

