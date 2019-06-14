import { createSelector } from 'reselect';
import { getCurrentPathname } from '@shopgate/pwa-common/selectors/router';
import getConfig from '../helpers/getConfig';

const {
  affectedPages,
} = getConfig();

// Change the header on every page as default
let shouldChangeHeader = () => true;

if (affectedPages && affectedPages.length) {
  shouldChangeHeader = createSelector(
    getCurrentPathname,
    pathname => affectedPages.includes(pathname)
  );
}

export { shouldChangeHeader };
