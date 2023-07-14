import React from 'react';
import axios from 'axios';


export default class BuildPizza extends React.Component{
    constructor(){
        super();
        this.state={
            items:[]
        }
    }
//API Call
    componentDidMount(){
        axios.get("http://localhost:3001/getIngredient")
            .then((response) => this.setState({
                items: response.data
                // console.log(response);
        })).catch(err=>console.log(err))
   
    }

    totalCharges(){
        var checkedBoxes = document.getElementsByName('plus');
        var totalCost=0;

        for(var checkbox of checkedBoxes){
            if(checkbox.checked){
                totalCost = totalCost+parseInt(checkbox.value);
            }
        }

       document.getElementById('cost').innerHTML="Total Cost : "+totalCost;
    }

    render(){
        return(
            <div >
                <div class="text-center">
                    <p>Pizzeria now gives you options to build your own pizza. Customize your pizza by choosing items from the list given below</p>
                </div>
                <table class="table tablestyle table-striped table-striped-columns">
                    <tbody>
                        {this.state.items.map((data)=>

                                <tr class="center">
                                    <td style={{width:"200px",border:"solid"}}><img src = {data.image} height="35px" width="60px" alt="pizza"></img></td>
                                    <td style={{width:"200px",border:"solid"}} class="center"><b>{data.tname}&nbsp;&nbsp;&nbsp;&nbsp;₹{data.price}.00</b></td>
                                    <td style={{width:"200px",border:"solid"}}><input type="checkbox" value={data.price} name="plus" onClick={this.totalCharges}/> &nbsp;&nbsp;&nbsp;<span className="copyright">Add</span></td>
                                </tr>
                        )}
                        <tr>
                            <td  colSpan='3'>
                                <b>
                                    <span class="c-text" id="cost">
                                    Total Cost : 0
                                  </span>
                                </b> <br />
                                <div class="text-center">
                                <a href="http://localhost:3000/ShoppingCart"><button class=" btn build-your-pizza-btn btn-dark text-warning"  >Build Your Pizza</button>
                                </a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="copyright text-center">
                    <p style={{ color:"orange" }}><i>Copyrights @ 2022 Pizzeria. All rights reserved</i></p>
                </div>
            </div>
        )
    }
}