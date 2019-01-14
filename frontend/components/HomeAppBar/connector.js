import { connect } from 'react-redux';
import { getCurrentPathname } from '@shopgate/pwa-common/selectors/router';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  isHome: getCurrentPathname(state) === '/',
});

export default connect(mapStateToProps);
