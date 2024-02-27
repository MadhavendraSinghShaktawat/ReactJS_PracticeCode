// useEffect(function, [dependencies])

// 1.) useEffect(() => {})              // Runs after every re-render
// 2.) useEffect(() => {}, [])          // Runs only on mount
// 3.) useEffect(() => {}, [value])     // Runs on mount + when value change


import React, {useState, useEffect} from "react";

function MyComponent(){
    const [count, setCount] = useState(0);


//---------Use of 1.) useEffect(() => {})------------


    // useEffect(()=>{                               //----|
    //     document.title = `Count: ${count}`;       //    |--Changing page title every time we are adding 1
    // });                                           //----|


//---------Use of 2.) useEffect(() => {}, [])------------


    // useEffect(() => {                           //----|
    //     document.title = "My Counter program";  //    |--Changing page title 1 time only, when we click add
    // }, [])                                      //----|


//---------Use of 3.) useEffect(() => {}, [value])------------

    // Mixture of both 1.) and 2.)
    useEffect(() => {                       //----|
        document.title = `Count: ${count}`; //    |--Changing page title every time we are adding 1 and when we first set up like 2.)
    }, [count])                                  //----|
    // it will only update when value of 'count' changes


//------------------------------------------------------------


    function addCount(){
        setCount(c => c + 1);
    }

    function subCount(){
        setCount(c => c - 1);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
        </div>
    );
}

export default MyComponent