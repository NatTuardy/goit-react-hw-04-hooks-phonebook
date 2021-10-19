import { useState } from "react";
import { generate } from "shortid";
import PropTypes from "prop-types";
import InputField from "../inputField/InputField";
import { list } from "../../fields/fields";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const handleChangeName = ({ target }) => {
       setName(target.value)
  };

  const handleChangeNumber = ({ target }) => {
      setNumber(target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generate();
    const newContact = { id, name, number };
    onSubmit(newContact);
    setName('')
    setNumber('')

  };
  
  return (
    <>
      <form onSubmit={handleSubmit} className="form-control mb-3">
        <InputField {...list.name} value={name} onChange={handleChangeName} />
        <InputField {...list.number} value={number} onChange={handleChangeNumber} />
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
