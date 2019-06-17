import { createSelector } from 'reselect';
import { getCurrentRoute } from '@shopgate/pwa-common/selectors/router';
import getConfig from '../helpers/getConfig';

const {
  affectedPages,
} = getConfig();

// Change the header on every page as default
let shouldChangeHeader = () => true;

if (affectedPages && affectedPages.length) {
  shouldChangeHeader = createSelector(
    getCurrentRoute,
    route => affectedPages.includes(route.pattern)
  );
}

export { shouldChangeHeader };
