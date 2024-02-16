// Props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         < Component Key=value />

// PropTypes = a mechanism that ensures that the passed value 
//             is of the correct datatype.
//             age: PropTypes.number
import Student from "./Student.jsx"

function App() {

  return (
    <>
      <Student name='Spongbob' age={30} isStudent={true}/>
      <Student name='Mohit' age={80} isStudent={true}/>
      <Student name='Mohit' age={80} isStudent={true}/>
      <Student name='MohitRnd' age={80} isStudent={false}/>
    </>
  )
}

export default App
