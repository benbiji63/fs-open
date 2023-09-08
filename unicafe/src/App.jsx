import { useState } from 'react';
import './App.css';
const average = (good, bad, neutral) => (good - bad) / (good + bad + neutral);
const positive = (good, bad, neutral) => (good / (good + bad + neutral)) * 100;
const ReviewButtons = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistic = ({ data, text }) => (
  <p>
    {text} {data}
  </p>
);

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
  const avg = average(good, bad, neutral);
  const positiveVal = positive(good, bad, neutral);
  return (
    <>
      <h1>Give Feedback</h1>
      <ReviewButtons handleClick={handleGood} text={'Good'} />
      <ReviewButtons handleClick={handleNeutral} text={'Neutral'} />
      <ReviewButtons handleClick={handleBad} text={'Bad'} />
      <h2>Statistics</h2>
      <Statistic data={good} text={'good'} />
      <Statistic data={bad} text={'Bad'} />
      <Statistic data={neutral} text={'Neutral'} />
      <Statistic data={avg} text={'Average'} />
      <Statistic data={positiveVal} text={'Positive'} />
    </>
  );
}

export default App;
