// React hook = Special function that allows functional components
//              to use React features without writing class components (Change made in react v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and many more...)

// useState() = A react hook that allows the creation of a statful variable
//              and a setter function to update its value in the Virtual DOM.
//              [name, setName]

import MyComponents from './MyComponents.jsx';
import Counter from './Counter.jsx'

function App() {
  return(
    <>
      <MyComponents/>
      <hr></hr>
      <Counter/>
    </>
  );
}

export default App