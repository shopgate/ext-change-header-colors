import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors } = themeConfig;

css.global('[data-test-id^="searchSuggestion"]', {
  color: colors.dark,
});

export default () => null;
