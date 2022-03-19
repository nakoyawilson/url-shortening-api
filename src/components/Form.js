const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="shorten-form">
      <label htmlFor="url-input" className="visually-hidden">
        {props.labelText}
      </label>
      <input
        type="text"
        name="urlInput"
        placeholder={props.labelText}
        id="url-input"
        value={props.inputValue}
        onChange={props.handleInputChange}
        className="url-input"
      />
      <p className="error-message" id="error-msg">
        Please add a link
      </p>
      <button className="shorten-button">{props.buttonText}</button>
    </form>
  );
};

export default Form;
