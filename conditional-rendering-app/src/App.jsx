// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show, hide, or change components)

import UserGreetings from "./UserGreetings.jsx"

function App() {

  return (
    <>
      <UserGreetings isLoggedIn={true} username="BroCode"/>
    </>
  )
}

export default App
