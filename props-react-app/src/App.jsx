// Props = read-only properties that are shared between components.
//         A parent component can send data to a child component.
//         < Component Key=value />

// PropTypes = a mechanism that ensures that the passed value 
//             is of the correct datatype.
//             age: PropTypes.number

// defaultProps = default values for props in case they are not
//                passed from the parent component
//                name: "Guest"



import Student from "./Student.jsx"

function App() {

  return (
    <>
      <Student name='Spongbob' age={30} isStudent={true}/>
      <Student name='Mohit' age={80} isStudent={true}/>
      <Student name='Mohit' age={80} isStudent={true}/>
      <Student name='MohitRnd' age={80} isStudent={false}/>
      <Student name='MohitRnd' age={'80'} isStudent={false}/>
      <Student name="Rudra"/>
    </>
  )
}

export default App
