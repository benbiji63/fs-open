import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// Initial stat of app before splitting
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = props => {
  return <h1>{props.course}</h1>;
};
const Content = props => {
  return (
    <div>
      <Part set={props.partDetails[0]} />
      <Part set={props.partDetails[1]} />
      <Part set={props.partDetails[2]} />
    </div>
  );
};

const Part = props => {
  return (
    <p>
      {props.set.name} {props.set.exercises}
    </p>
  );
};

const Footer = props => {
  return (
    <p>
      Number of exercises {props.exercises.reduce((acc, num) => acc + num, 0)}
    </p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];
  return (
    <div>
      <Header course={course} />
      <Content partDetails={parts} />
      <Footer exercises={parts.map(part=>part.exercises)} />
    </div>
  );
};

export default App;
