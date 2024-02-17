function List(){
    const fruits = [{id: 1,name: "apple", calories: 95}, 
                    {id: 2,name: "orange", calories: 45}, 
                    {id: 3,name: "banana", calories: 105}, 
                    {id: 4,name: "coconut", calories: 159}, 
                    {id: 5,name: "pineapple", calories: 37}]
    //fruits.sort()  // normal alphabetical sorting.
    fruits.sort((a,b) => (a.name.localeCompare(b.name))) // Alphabetical sorting
    fruits.sort((a,b) => (b.name.localeCompare(a.name))) // Reverse Alphabetical sorting
    fruits.sort((a,b) => (a.calories - b.calories)) // Numeric sorting
    fruits.sort((a,b) => (b.calories - a.calories)) // Reverse Numeric sorting

    const lowCalfruits = fruits.filter(fruit => fruit.calories < 100);
    const listItems = lowCalfruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;<b> {fruit.calories}</b></li>)
    return(
        <ul>
            {listItems}
        </ul>
    );
}
export default List