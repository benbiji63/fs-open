import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

// function App() {
//    const [count, setCount] = useState(0)
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

// const Hello = props => {
//   console.log(props);
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old{' '}
//       </p>
//     </div>
//   );
// };

// const App = () => {
//   const name = 'Peter';
//   const age = 10;
//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />{' '}
//     </div>
//   );
// };

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);

//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>left</button>
//       <button onClick={() => setRight(right + 1)}>right</button>
//       {right}
//     </div>
//   );
// };

// Handling arrays
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)

//   const [allClicks, setAll] = useState([])

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}

//       <p>{allClicks.join(' ')}</p>
//     </div>
//   )
// }

// Update of state is asynchronous
// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);

//   const [total, setTotal] = useState(0);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     const updatedLeft = left + 1
//     setLeft(updatedLeft)
//     setTotal(updatedLeft + right)
//   }
//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     const updatedRight = right + 1
//     setRight(updatedRight)
//     setTotal(updatedRight + left)
//   }

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat('L'));
  //   const updatedLeft = left + 1;
  //   setLeft(updatedLeft);
  //   setTotal(updatedLeft + right);
  // };

  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'));
  //   const updatedRight = right + 1;
  //   setRight(updatedRight);
  //   setTotal(left + updatedRight);
  // };

//   return (
//     <div>
//       {left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {right}
//       <p>{allClicks.join(' ')}</p>

//       <p>total {total}</p>
//     </div>
//   );
// };

// Conditional rendering
// const History = props => {
//   if (props.allClicks.length === 0) {
//     return <div>the app is used by pressing the buttons</div>;
//   }
//   return <div>button press history: {props.allClicks.join(' ')}</div>;
// };
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}> {text} </button>
// );
// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);
//   const [allClicks, setAll] = useState([]);
//   const [total, setTotal] = useState(0);

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'));
//     const updatedLeft = left + 1;
//     setLeft(updatedLeft);
//     setTotal(updatedLeft + right);
//   };
//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'));
//     const updatedRight = right + 1;
//     setRight(updatedRight);
//     setTotal(updatedRight + left);
//   };
//   return (
//     <div>
//       {left}
//       <Button handleClick={handleLeftClick} text="left" />{' '}
//       <Button handleClick={handleRightClick} text="right" />
//       {right}
//       <History allClicks={allClicks} />
//     </div>
//   );
// };

// A function that returns a function
// const App = () => {
//   const [value, setValue] = useState(10);
//   const hello = () => {
//     const handler = () => console.log('hello world');
//     return handler;
//   };
//   return (
//     <div>
//       {value}
//       <button onClick={hello()}>button</button>
//     </div>
//   );
// };

// const App = () => {
//   const [value, setValue] = useState(10);

//   const hello = who => {
//     const handler = () => {
//       console.log('hello', who);
//     };
//     return handler;
//   };

//   return (
//     <div>
//       {value}

//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//       <button onClick={hello('function')}>button</button>
//     </div>
//   );
// };

const App = () => {
  const [value, setValue] = useState(10);

  const setToValue = newValue => () => {
    console.log('value now', newValue); // print the new value to console
    setValue(newValue);
  };
  return (
    <div>
      {value}
      <button onClick={setToValue(1000)}>thousand</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>increment</button>
    </div>
  );
};
export default App;
