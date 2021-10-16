import PropTypes from 'prop-types'

const ContactItem = ({ data = [], onDelete }) => {
  const contactsList = data.map(({ name, id, number }) => (
        <li
          key={id}
          className="list-group-item d-flex justify-content-between align-items-start "
        >
          {name}: {number}
          <button
            onClick={() => onDelete(id)}
            type="submit"
            className="btn btn-primary align-items-end btn-sm"
          >
            Delete
          </button>
        </li>
  ));
  return <>{contactsList}</>;
};

export default ContactItem;

ContactItem.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
}
