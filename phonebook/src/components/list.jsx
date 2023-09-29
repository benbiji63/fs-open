const List = ({ items }) => (
  <ul type={'none'}>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

export default List;
