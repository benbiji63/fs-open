import { useState } from 'react';
import './App.css';

const ReviewButtons = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Reviews = ({review,text})=>(
  <p>{text} {review}</p>
)

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    const val = good + 1;
    setGood(val);
  };
  const handleBad = () => {
    const val = bad + 1;
    setBad(val);
  };
  const handleNeutral = () => {
    const val = neutral + 1;
    setNeutral(val);
  };
  return (
    <>
      <h1>Give Feedback</h1>
      <ReviewButtons handleClick={handleGood} text={'good'} />
      <ReviewButtons handleClick={handleBad} text={'Bad'} />
      <ReviewButtons handleClick={handleNeutral} text={'Neutral'} />
      <h2>Statistics</h2>
      <Reviews review={good} text={'good'} />
      <Reviews review={bad} text={'Bad'} />
      <Reviews review={neutral} text={'Neutral'} />

    </>
  );
}

export default App;
