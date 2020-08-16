import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Products extends Component {
    state = {
        bicycle:{
            id: 1,
            name: "Bicycle",
            price: 30,
            quantity: 15,
            desc: 'Bicycle is Good'
        },
        TV: {
            id:2,
            name: "TV",
            price: 40,
            quantity: 16,
            desc: "TV is good"
        },
        pencil: {
            id: 3,
            name: "Pencil",
            price: 50,
            quantity: 17,
            desc: "Pencil is good"
        }
    }
    render() {
        return (
          <div className="main">
            <span>All Products:</span><br/>
            <NavLink className="red" to= {{pathname:'/products/' + this.state.bicycle.id,state:this.state.bicycle}} >Bicycle</NavLink><br/>
            <NavLink className="red" to={{pathname:'/products/' + this.state.TV.id,state:this.state.TV}} >TV</NavLink><br/>
            <NavLink className="red" to={{pathname:'/products/' + this.state.pencil.id,state:this.state.pencil}}>Pencil</NavLink><br/>
          </div>
        );
      }
}
export default Products;