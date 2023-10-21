const List = ({ items,deleteContact }) => {
  // console.log(items);
  return (
    <ul type={'none'}>
      {items.map(item => (
        <li key={item.id}>
          <span>{`${item.name} ${item.number}`}</span>
          <button onClick={()=>deleteContact(event,item.id)}>Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
