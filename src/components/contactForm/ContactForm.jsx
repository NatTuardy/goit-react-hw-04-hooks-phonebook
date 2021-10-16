import { useState } from "react";
import { generate } from "shortid";
import PropTypes from "prop-types";
import InputField from "../inputField/InputField";
import { list } from "../../fields/fields";

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: "",
    number: "",
  });

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generate();
    const { name, number } = state;
    const newContact = { id, name, number };
    onSubmit(newContact);
    setState({
      name: "",
      number: "",
    });
  };
  const { name, number } = state;
  return (
    <>
      <form onSubmit={handleSubmit} className="form-control mb-3">
        <InputField {...list.name} value={name} onChange={handleChange} />
        <InputField {...list.number} value={number} onChange={handleChange} />
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Add contact
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
