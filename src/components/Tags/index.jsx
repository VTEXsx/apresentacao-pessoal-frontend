import PropTypes from 'prop-types';

function Tag({ children }) {
  return (
    <div className="border-2 border-blue-600 px-2 rounded-lg text-sm">
      {children}
    </div>
  );
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
