// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

// function App() {
//   // const [count, setCount] = useState(0)
//   const date = new Date;
//   const a = 20;
//   const b = 25;
//   console.log(date,a**b);

//   return (
//     <>
//   <div>
//     <p>Today&apos; date is {date.toUTCString()}</p>
//     <p>{a**b}</p>
//   </div>

//       {/* <div>
//         <p>Hello world</p>
//       </div> */}

//       {/* <div>
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
//       </p> */}
//     </>
//   );
// }

// const Hello = () => {
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello />
//       <Hello />
//       <Hello />
//     </div>
//   )
// }

// const Hello = props => {
//   return (
//     <div>
//       <p>Hello {props.name}</p>{' '}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="George" />
//       <Hello name="Daisy" />
//     </div>
//   );
// };

const Hello = props => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old{' '}
      </p>
    </div>
  );
};

const App = () => {
  const name = 'Peter';
  const age = 10;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} /> 
      <Hello name={name} age={age} />{' '}
    </div>
  );
};

export default App;
