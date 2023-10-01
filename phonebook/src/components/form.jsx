const Form = ({ handleClick, handleChange }) => {
  console.log(handleClick);
  return (
    <form onSubmit={() =>  handleClick(event, document.querySelector('#name').value,document.querySelector('#number').value)}>
      <div>
        <span>name:</span> <input id="name" />
      </div>
      <div>
        <span>number:</span> <input id="number"/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
