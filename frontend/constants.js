import getConfig from './helpers/getConfig';

const {
  headerHomePageBackgroundColor,
  headerHomePageTextColor,
  backgroundColor,
  textColor,
} = getConfig();

// Use old config values headerHomePageBackgroundColor, headerHomePageTextColor if they still exist
export const HEADER_BACKGROUND_COLOR = headerHomePageBackgroundColor || backgroundColor || null;
export const HEADER_COLOR = headerHomePageTextColor || textColor || null;

