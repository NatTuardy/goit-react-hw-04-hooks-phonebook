import ContactItem from "./contactItem/ContactItem";
import PropTypes from "prop-types";

const ContactList = ({ data, onDelete }) => {
  return (
    <>
      <h1>Contacts</h1>
      <ul className="list-group d-grid gap-2 d-md-flex justify-content-center">
        <ContactItem data={data} onDelete={onDelete} />
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
