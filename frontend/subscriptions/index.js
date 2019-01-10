import { routeWillLeave$, routeDidEnter$ } from '@shopgate/pwa-common/streams/router';
import { setBackgroundColor, setColor } from '../action-creators';
import { HEADER_BACKGROUND_COLOR, HEADER_COLOR, HEADER_BACKGROUND_COLOR_DEFAULT, HEADER_COLOR_DEFAULT } from '../constants';

/**
 * Subscription for header Color.
 * @param {function} subscribe Subscribe.
 */
export default function headerColorSubscriptions(subscribe) {
  const routeIsHome$ = routeDidEnter$.filter(({ action }) => (action.route.pattern === '/'));
  const routeDidLeaveHome$ = routeWillLeave$.filter(({ action }) => (action.route.pattern === '/'));

  subscribe(routeIsHome$, ({ dispatch }) => {
    dispatch(setBackgroundColor(HEADER_BACKGROUND_COLOR));
    dispatch(setColor(HEADER_COLOR));
  });

  subscribe(routeDidLeaveHome$, ({ dispatch }) => {
    dispatch(setBackgroundColor(HEADER_BACKGROUND_COLOR_DEFAULT));
    dispatch(setColor(HEADER_COLOR_DEFAULT));
  });
}
