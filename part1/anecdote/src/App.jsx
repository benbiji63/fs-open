import { useState } from 'react';
import './App.css';

const Header3 = ({ text }) => <h3>{text}</h3>;

const Paragraph = ({ text }) => <p>{text}</p>;

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const popularity = anecdotes.map(ele => {
    return { anecdote: ele, votes: 0 };
  });
  const [votes, setVotes] = useState(popularity);
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState('');
  const findMostVoted = () =>
    votes.sort((a, b) => (a.votes < b.votes ? 1 : -1))[0].anecdote;

  const [selected, setSelected] = useState(0);

  // console.log(votes);
  // console.log(selected);
  const incrementVote = index => {
    let arr = [...votes];
    arr[index].votes += 1;
    setVotes(arr);
    const mv = findMostVoted();
    setMostVotedAnecdote(mv);
  };
  const nextAnecdote = () => {
    const nextIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(nextIndex);
  };

  return (
    <>
      <Header3 text={'Anecdote of the day'}></Header3>
      <Paragraph text={anecdotes[selected]}></Paragraph>
      <Paragraph text={`Has ${votes[selected].votes} Votes`}> </Paragraph>
      <Button handleClick={e => incrementVote(selected)} text={'Vote'}></Button>
      <Button handleClick={e => nextAnecdote()} text={'Next'}></Button>
      <Header3 text={'Anecdote with most votes'}></Header3>
      <Paragraph text={mostVotedAnecdote}></Paragraph>
    </>
  );
};

export default App;
