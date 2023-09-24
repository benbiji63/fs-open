import { useState } from 'react';
import Course from './components/course.jsx';

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

// -------------
// Split content into components to
//  -----------

// const Header = props => {
//   return <h1>{props.course}</h1>;
// };
// const Content = props => {
//   return (
//     <div>
//       <Part set={props.partDetails[0]} />
//       <Part set={props.partDetails[1]} />
//       <Part set={props.partDetails[2]} />
//     </div>
//   );
// };

// const Part = props => {
//   return (
//     <p>
//       {props.set.name} {props.set.exercises}
//     </p>
//   );
// };

// const Footer = props => {
//   return (
//     <p>
//       Number of exercises {props.exercises.reduce((acc, num) => acc + num, 0)}
//     </p>
//   );
// };

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       { name: 'Fundamentals of React', exercises: 10 },
//       { name: 'Using props to pass data', exercises: 7 },
//       { name: 'State of a component', exercises: 14 },
//     ],
//   };
//   return (
//     <div>
//       <Header course={course.name} />
//       <Content partDetails={course.parts} />
//       <Footer exercises={course.parts.map(part => part.exercises)} />
//     </div>
//   );
// };

// --------------
// Made the entire content  into a app component
// --------------

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ]
  };
  course.totalExercises = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return <Course course={course} />;
};

export default App;
