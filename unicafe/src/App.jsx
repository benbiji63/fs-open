import { useState } from 'react';
import './App.css';

const average = (good, bad, neutral) => (good - bad) / (good + bad + neutral);
const positive = (good, bad, neutral) => (good / (good + bad + neutral)) * 100;
const numOfReviews = (good, bad, neutral) => good + bad + neutral;

const ReviewButtons = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const StatisticsLine = ({ stats, total }) => {
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <table>
        {stats.map(stat => (
          <Statistic data={stat.val} text={stat.name} />
        ))}
      </table>
    </>
  );
};
const Statistic = ({ data, text }) => (
  <tr>
    <td>{text}</td>
    <td>{data}</td>
  </tr>
  //  {data}
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
  const total = numOfReviews(good, neutral, bad);
  const stats = [
    { name: 'good', val: good },
    { name: 'neutral', val: neutral },
    { name: 'bad', val: bad },
    { name: 'all', val: total },
    { name: 'average', val: avg },
    { name: 'positive', val: positiveVal },
  ];

  return (
    <>
      <h1>Give Feedback</h1>
      <ReviewButtons handleClick={handleGood} text={'Good'} />
      <ReviewButtons handleClick={handleNeutral} text={'Neutral'} />
      <ReviewButtons handleClick={handleBad} text={'Bad'} />
      <h2>Statistics</h2>
      <StatisticsLine stats={stats} total={total} />
    </>
  );
}

export default App;
