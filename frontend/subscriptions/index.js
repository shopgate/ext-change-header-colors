import { routeDidChange$ } from '@shopgate/pwa-common/streams/history';
import { setBackgroundColor, setColor } from '../action-creators';
import { HEADER_BACKGROUND_COLOR, HEADER_COLOR, HEADER_BACKGROUND_COLOR_DEFAULT, HEADER_COLOR_DEFAULT } from '../constants';

/**
 * Subscription.
 * @param {function} subscribe Subscribe.
 */
const headerColorSubscriptions = (subscribe) => {
  subscribe(routeDidChange$, ({ dispatch, pathname, prevPathname }) => {
    if (pathname === '/') {
      dispatch(setBackgroundColor(HEADER_BACKGROUND_COLOR));
      dispatch(setColor(HEADER_COLOR));
    } else if (prevPathname === '/') {
      dispatch(setBackgroundColor(HEADER_BACKGROUND_COLOR_DEFAULT));
      dispatch(setColor(HEADER_COLOR_DEFAULT));
    }
  });
};

export default headerColorSubscriptions;
