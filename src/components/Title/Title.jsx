import PropTypes from 'prop-types';
export const Title = ({ title }) => {
  return <h2>{title}</h2>;
};

Title.propType = {
  title: PropTypes.string,
};
