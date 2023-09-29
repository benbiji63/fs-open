const Form = ({handleClick,handleChange}) => {
  return (
    <form onSubmit={()=>handleClick(event,document.querySelector('#name').value)}>
      <div>
        <span>name:</span>
        <input id='name'onChange={handleChange} />
      </div>
      <div>
        <button type="submit" >add</button>
      </div>
    </form>
  );
};

export default Form;
