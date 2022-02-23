const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="url-input" name="urlInput" className="visually-hidden">
        {props.labelText}
      </label>
      <input
        type="text"
        placeholder={props.labelText}
        id="url-input"
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <button>{props.buttonText}</button>
    </form>
  );
};

export default Form;
