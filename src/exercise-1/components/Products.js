import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import data from '../../exercise-2/mockups/data.json'
class Products extends Component {
    state = data
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