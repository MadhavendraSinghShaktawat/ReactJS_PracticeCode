import React, {useState} from "react";

function MyPage(){
    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComm] = useState("")
    const [payment, setPay] = useState("")

    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComm(event.target.value);
    }
    function handlePaymentChange(event){
        setPay(event.target.value);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <input value={name} onChange={handleNameChange}/>

            <p>Quantity: {quantity}</p>
            <input value={quantity} onChange={handleQuantityChange} type="number"/>

            <p>Comment: {comment}</p>
            <textarea placeholder="Type you comment!" value={comment} onChange={handleCommentChange}></textarea>

            <p>Payment: {payment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
        </div>
    );
}

export default MyPage