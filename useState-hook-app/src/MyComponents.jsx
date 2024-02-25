import React, {useState} from 'react'    // importing useState from react library

function MyComponents(){
    const [name, setName] = useState("Guest");  // here initial name is Guest

    const updateName = ()=>{
 //      name = "Kitrexu";           //----|----will not chane name in DOM but it will change name in console: to solve this we have useState- to get real time update in DOM
 //      console.log({name});        //----|

        // Instead of abouve practice we use useState hook() this time
        setName("Kitrexu")
    }

    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false);

    const IncrementAge = ()=>{
        setAge(age+1);
    }

    const toggleEmployedStatus = ()=>{
        setisEmployed(!isEmployed);
    }


    return(
        <div className='counter-container'>
            <p className="count-display" id='count-display'>Name: = {name}</p>
            <p className="count-display" id='count-display'>Age: {age}</p>
            <p className="count-display" id='count-display'>isEmployed: {isEmployed? 'Yes':'No'}</p> 

            <button onClick={updateName} className="counter-btn">Set Name</button>  
            <button onClick={IncrementAge} className="counter-btn">Increment Age</button>
            <button onClick={toggleEmployedStatus} className="counter-btn">Toggle Status</button>
        </div>
        );
    }



export default MyComponents