import React,{Component} from 'react';
class ProductDetails extends Component {
    render() {
        return (
          <div className="main">
              <p><b>Product Details:</b></p>
            <p>Name:{this.props.location.state.name}</p>
          <p>id:{this.props.match.params.id}</p>
          <p>Price:{this.props.location.state.price}</p>
          <p>Quantity:{this.props.location.state.quantity}</p>
          <p>Desc:{this.props.location.state.desc}</p>
          <p>URL:{this.props.location.pathname}</p>
          </div>
        );
      }
}
export default ProductDetails;