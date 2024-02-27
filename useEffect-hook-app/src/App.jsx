// useEffect():- React hook that tells React Do Some Code when (pick one):
//               This Component re-renders
//               This component mounts
//               The state of a value

import MyComponent from "./MyComponent"

// useEffect(function, [dependencies])

// 1.) useEffect(() => {})              // Runs after every re-render
// 2.) useEffect(() => {}, [])          // Runs only on mount
// 3.) useEffect(() => {}, [value])     // Runs on mount + when value change

// USES
// #1 Event Listners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

function App() {

  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
