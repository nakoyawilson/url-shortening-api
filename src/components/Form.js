const Form = (props) => {
  return (
    <form>
      <label htmlFor="user-inout" class="visually-hidden">
        {props.labelText}
      </label>
      <input type="text" placeholder={props.labelText} id="user-input" />
      <button>{props.buttonText}</button>
    </form>
  );
};

export default Form;
