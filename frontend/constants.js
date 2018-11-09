import getConfig from './helpers/getConfig';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { background, primary }  = themeConfig.colors;

const {
  headerBackgroundColor,
  headerColor,
  headerBackgroundColorDefault,
  headerColorDefault,
} = getConfig();

export const HEADER_BACKGROUND_COLOR = headerBackgroundColor ? headerBackgroundColor : background;
export const HEADER_COLOR = headerColor ? headerColor : primary;
export const HEADER_BACKGROUND_COLOR_DEFAULT = headerBackgroundColorDefault ? headerBackgroundColorDefault : background;
export const HEADER_COLOR_DEFAULT = headerColorDefault ? headerColorDefault : primary;
export const SET_NAVIGATOR_BACKGROUND = 'SET_NAVIGATOR_BACKGROUND';
export const SET_NAVIGATOR_COLOR = 'SET_NAVIGATOR_COLOR';

