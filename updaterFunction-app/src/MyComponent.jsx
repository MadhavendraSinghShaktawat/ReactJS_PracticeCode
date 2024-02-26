import React, {useState} from "react"

function MyComponent(){
    const [count, setCount] = useState(0);

    const btnIncre = ()=>{
        // setCount(count+1); //----- |
        // setCount(count+1); //      |------It will not update count because we are not assigning
        // setCount(count+1); //----- |

        // we will take first letter of count.
        // we can also take prevCount on the place of c

        // Takes the Pending state to calculate next state
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order.

        setCount(c => c+1); //----- |
        setCount(c => c+1); //      |------It will update count because we are assigning
        setCount(c => c+1); //----- |
    }

    const btnDecre = ()=>{
        // setCount(count-1);

        setCount(c => c-1); 
        setCount(c => c-1); //      |------It will update count because we are assigning
        setCount(c => c-1);
    }

    const btnRes = ()=>{
        setCount(c => 0);
    }

    return(
    <>
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button onClick={btnIncre} className="counter-btn">Increment</button>
            <button onClick={btnRes} className="counter-btn">Reset</button>
            <button onClick={btnDecre} className="counter-btn">Decrement</button>
        </div>
    </>
    ) 
}

export default MyComponent