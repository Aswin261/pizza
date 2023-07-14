import React, { useState } from 'react';
import './cart.css';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
function DisplayCart(props) {
    const [count, setCount] = useState(1);

    const addCount = (price) => {
        setCount(count + 1)
        props.onChange(price, 1)
    }
    const decCount = (price) => {

        if (count > 1) {
            setCount(count - 1)
            props.onChange(price, 0)


        }

    }

    return (
        <div>
            <div className='plus-minus'>
                <button onClick={() => decCount(props.price)} style={{ border: "none" }} type="submit"><AiOutlineMinus /></button><input type="text" value={count} style={{ width: "60px", textAlign: "center" }}></input>
                <button onClick={() => addCount(props.price)} style={{ border: "none" }}><AiOutlinePlus /></button>
            </div>
            <div className='price' >
                            <p><strong>Rupees.{props.price * count}</strong></p>
            </div>
        </div>
    )

}
export default DisplayCart;