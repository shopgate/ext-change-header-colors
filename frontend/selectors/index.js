import { createSelector } from 'reselect';
import { getCurrentPathname } from '@shopgate/pwa-common/selectors/router';

export const isHomePage = createSelector(
  getCurrentPathname,
  pathname => pathname === '/'
);
