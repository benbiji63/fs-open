import Parts from './parts.jsx';

const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Parts text={`${part.name} ${part.exercises}`} key={part.id} />
    ))}
  </>
);

export default Content;
