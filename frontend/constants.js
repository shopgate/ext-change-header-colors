import { themeConfig } from '@shopgate/pwa-common/helpers/config';
import getConfig from './helpers/getConfig';

const { background, primary } = themeConfig.colors;

const {
  headerBackgroundColor,
  headerColor,
  headerBackgroundColorDefault,
  headerColorDefault,
} = getConfig();

export const HEADER_BACKGROUND_COLOR =
               (headerBackgroundColor !== undefined && headerBackgroundColor !== null)
                 ? headerBackgroundColor : background;
export const HEADER_COLOR = (headerColor !== undefined && headerColor !== null)
  ? headerColor : primary;
export const HEADER_BACKGROUND_COLOR_DEFAULT =
               (headerBackgroundColorDefault !== undefined && headerBackgroundColorDefault !== null)
                 ? headerBackgroundColorDefault : background;
export const HEADER_COLOR_DEFAULT =
               (headerColorDefault !== undefined && headerColorDefault !== null)
                 ? headerColorDefault : primary;
export const SET_NAVIGATOR_BACKGROUND = 'SET_NAVIGATOR_BACKGROUND';
export const SET_NAVIGATOR_COLOR = 'SET_NAVIGATOR_COLOR';

