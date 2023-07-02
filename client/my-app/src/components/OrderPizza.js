import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import OrderDisplay from './OrderDisplay'
import axios from 'axios';

function OrderPizza() {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/getPizza").then((res) => {
      console.log(res.data);
      setPizza(res.data);

    }).catch((err) => {
      console.log(err);
    });
  }, [])
  return (
    <div>
      <div>
        {
          pizza.map((item, id) => <OrderDisplay data={item} number={id} key={id}></OrderDisplay>)
        }
      </div>
    </div>
  );
}
export default OrderPizza;