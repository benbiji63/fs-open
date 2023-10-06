const List = ({ items }) => {
  return(
  <ul type={'none'}>
    {items.map(item => (
      <li key={item.id}>{`${item.name} ${item.number}`}</li>
    ))}
  </ul>
)};

export default List;
