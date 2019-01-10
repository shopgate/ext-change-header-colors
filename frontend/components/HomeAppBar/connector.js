import { connect } from 'react-redux';
import { isHomePage } from '../../selectors';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  isHome: isHomePage(state),
});

export default connect(mapStateToProps);
