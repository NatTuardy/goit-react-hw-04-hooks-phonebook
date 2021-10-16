import PropTypes from 'prop-types'

const InputField = (props) => {
    const data = { ...props};
    return (
        <div className="mb-3">
            {data.label && <label htmlFor={data.id} className="form-label">{data.label }</label>}
            <input {...data}  />
        </div>        
    )
};

export default InputField;

InputField.propTypes = {
    props: PropTypes.object,
  }