import PropTypes from 'prop-types';
import './Globalstyle.scss';
function Globalstyle({ children }) {
    return children;
}

Globalstyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Globalstyle;
