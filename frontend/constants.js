import getConfig from './helpers/getConfig';

const {
  backgroundColor,
  textColor,
} = getConfig();

export const HEADER_BACKGROUND_COLOR = backgroundColor || null;
export const HEADER_COLOR = textColor || null;

