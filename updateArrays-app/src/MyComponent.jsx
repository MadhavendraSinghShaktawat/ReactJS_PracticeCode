import React, {useState} from "react";

function MyComponent(){

    const [food, setFood] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";    // it will delete string from input box
        setFood(f => [...f, newFood]);
    }   
    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i != index)); // i == index, and '_' meaning ignore this element
    }


    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {food.map((food, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent