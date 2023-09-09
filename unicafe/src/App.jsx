import { useState } from 'react';
import './App.css';
const average = (good, bad, neutral) => (good - bad) / (good + bad + neutral);
const positive = (good, bad, neutral) => (good / (good + bad + neutral)) * 100;
const ReviewButtons = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ stats }) => {
  return (
    <>
      <h2>Statistics</h2>
      {/* <Statistic data={good} text={'good'} />
      <Statistic data={bad} text={'Bad'} />
      <Statistic data={neutral} text={'Neutral'} />
      <Statistic data={avg} text={'Average'} />
      <Statistic data={positiveVal} text={'Positive'} /> */}
      {stats.map(stat=><Statistic data={stat.val} text={stat.name} />)}
    </>
  );
};
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
  const stats = [
    { name: 'good', val: good },
    { name: 'neutral', val: neutral },
    { name: 'bad', val: bad },
    { name: 'average', val: avg },
    { name: 'positive', val: positive },
  ];

  return (
    <>
      <h1>Give Feedback</h1>
      <ReviewButtons handleClick={handleGood} text={'Good'} />
      <ReviewButtons handleClick={handleNeutral} text={'Neutral'} />
      <ReviewButtons handleClick={handleBad} text={'Bad'} />
      <Statistics stats={stats} />
    </>
  );
}

export default App;
