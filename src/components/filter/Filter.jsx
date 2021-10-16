import PropTypes from 'prop-types'

const Filter = ({ onChange, filter }) => {
  return (
    <>
      <h2>Find contacts by name:</h2>
      <div className="form-control col-md-6">
        <input
          className="form-control col-md-3"
          onChange={onChange}
          name="filter"
          value={filter}
          type="text"
        />
      </div>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}