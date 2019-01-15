import getConfig from './helpers/getConfig';

const {
  headerHomePageBackgroundColor,
  headerHomePageTextColor,
} = getConfig();

export const HEADER_BACKGROUND_COLOR = headerHomePageBackgroundColor || null;
export const HEADER_COLOR = headerHomePageTextColor || null;

