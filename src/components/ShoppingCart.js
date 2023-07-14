import React, { useEffect, useState, useLayoutEffect} from 'react';
import DisplayCart from './DisplayCart';
import './cart.css';
import { RiDeleteBin6Line } from 'react-icons/ri';
//import Logo from './asset/Logo.png';

function ShoppingCart() {
    const [finalItems, setFinalItems] = useState([]);
    const [totalPrice,setTotalPrice]=useState(1);
    useEffect(() => {
        const finaldata = JSON.parse(localStorage.getItem('items'));
        setFinalItems(finaldata);   
    }, [])

    const addMinPrice=(price,flag)=>{
        let value=+price;
        if(flag===1)
        {
            setTotalPrice((preValue)=>preValue+value);
        }
        if(flag===0)
        {
            setTotalPrice((preValue)=>preValue-value);
        }
    }
    const handlePrice=()=>{
        let ans=0;
        let i,num;
        const final = JSON.parse(localStorage.getItem('items'));
        
        for(i=0;i<final.length;i++)
        {
            num=+final[i].price;
            ans=ans+num;
        }
        setTotalPrice(ans);
        console.log("total price",ans);

    }
    useLayoutEffect(()=>{
        handlePrice();
    },[])
    const removeItem = (id,price) => {
        const data = finalItems
        const arr = data.filter((item) => item.id !== id)
        localStorage.setItem('items', JSON.stringify(arr));
        const finaldata = JSON.parse(localStorage.getItem('items'));
        setFinalItems(finaldata);
        console.log("dara", data);
        console.log("array", arr);
        handlePrice();
    }

    return (
        //<div style={{ backgroundImage:`url(${Logo})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}>
       finalItems.length!==0?<div>
             
            <h3 style={{textAlign:"center",marginTop:"30px"}}>Your Cart Details</h3>
            <div class="card" style={{ width: "90%", marginTop: "30px", marginLeft: "80px" }}  >
                
                <div class="card-body backgroundColor:yellow">

                   {finalItems.map((item, id) => <div className='parent' key={id}>
                        <div className='image' >
                            <img src={item.image} alt="product" width="60px" height="50px"></img>
                        </div>
                        <div className='title'>
                            <h4>{item.name||item.tname}</h4>
                        </div>
                            <DisplayCart price={item.price} onChange={addMinPrice}></DisplayCart>
                        <div className='remove'>
                            <button onClick={() => removeItem(item.id,item.price)} type="submit" style={{ border: "none" }}><RiDeleteBin6Line /></button>
                        </div>
                    </div>
                    )
                    }
                    

                </div>
               
            </div>
                    
                    {/* calculation of total price */}
            <div>
               
                  <h3 style={{marginLeft:"790px",marginTop:"30px"}}><strong>Total : {totalPrice}</strong></h3>
                    
            </div>
           
        </div>:<div>
            <div class="card" style={{ width: "90%", marginTop: "30px", marginLeft: "80px" }}>
                <div  class="card-body" style={{backgroundColor:"black"}}>
                <h1  style={{textAlign:"center",backgroundColor:"orangem",color:"white"}}>NO CART ITEMS FOUND</h1>

                </div>

            </div>
            </div>
    )
}
export default ShoppingCart;