import React, {useState} from "react"

function Counter(){
    const [count, setCount] = useState(0);

    const btnIncre = ()=>{
        setCount(count+1);
    }

    const btnDecre = ()=>{
        setCount(count-1);
    }

    const btnRes = ()=>{
        setCount(0);
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

export default Counter