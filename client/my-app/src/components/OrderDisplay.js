import React ,{useEffect, useState}from "react";
import './style.css';
import { FaRupeeSign} from 'react-icons/fa';
function OrderDisplay({ data, number }) {
    // const[items,setItems]=useState([]);
    var dispaly = (number % 2 == 1) ? "style2" : "style1";
    var mealType=(data.type=="veg"?"green":"red");  
    const[isClick,setClick]=useState(true);
    const[buttonText,setButtonText]=useState("Add to cart")
    
    
    useEffect(()=>{
        localStorage.setItem('items', JSON.stringify([]));
    },[])
    const handleInput=(data)=>{
        if(isClick===true){
        const getItems=JSON.parse(localStorage.getItem('items'));
        // setItems(data)
           const finalList=[...getItems,data]
            console.log("final list",finalList);
            localStorage.setItem('items', JSON.stringify(finalList)); 
            setButtonText("Added");
            setClick(false)
        }
    }
    return (
       
        <div class={dispaly}>
            <div class="card " style={{ height: "380px", borderStyle: "outset" }} >
                <div class="card-body">
                    <div style={{ width: "80px",marginTop:"10px" }}>
                        <p><strong>{data.name}</strong></p>
                        <div className={mealType}>
                        </div>
                        <p><strong><FaRupeeSign/>{data.price}.00</strong></p>
                    </div>
                    <div style={{ fonstSize: "10px", marginLeft: "80px", marginTop: "-135px", width: "215px" }}>
                        <p>{data.description}</p>
                        <p><strong>Ingredients:</strong>{data.ingredients.toString()}.</p>
                        <p><strong>Toppings:</strong>{data.topping.toString()}.</p>
                        <img src={data.image} alt="pizza img" style={{ width: "130px", heigth: "130px", marginLeft: "250px", marginTop: "-400px" }}></img>
                        <button   onClick={(e)=>{handleInput(data)}} class="btn btn-warning btn-sm"  type="submit" style={{ color: "white", marginLeft: "265px", width: "100px", marginTop: "-230px" }}  >{buttonText}</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
     
    );
}
export default OrderDisplay;