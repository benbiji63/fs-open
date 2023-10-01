const Form = { handleClick, handleNameChange, handleNumberChange }(
  <form
    onSubmit={() =>
      handleClick(
        event,
        document.querySelector('#name').value,
        document.querySelector('#number').value
      )
    }>
    <div>
      <span>name:</span> <input id="name" onChange={handleNameChange} />
    </div>
    <div>
      <span>number:</span> <input id="number" onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default Form;
