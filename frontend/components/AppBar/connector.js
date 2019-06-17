import { connect } from 'react-redux';
import { shouldChangeHeader } from '../../selectors';

/**
 * @param {Object} state state
 * @returns {Object}
 */
const mapStateToProps = state => ({
  changeHeader: shouldChangeHeader(state),
});

export default connect(mapStateToProps);
