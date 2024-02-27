# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// useEffect():- React hook that tells React Do Some Code when (pick one):
//               This Component re-renders
//               This component mounts
//               The state of a value

// useEffect(function, [dependencies])

// 1.) useEffect(() => {})          // Runs after every re-render
// 2.) useEffect(() => [])          // Runs only on mount
// 3.) useEffect(() => [value])     // Runs on mount + when value change

// USES
// #1 Event Listners
// #2 DOM Manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts