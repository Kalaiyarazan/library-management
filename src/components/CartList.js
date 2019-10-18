import React, { Component } from 'react'

class CartList extends Component {
    render() {
        const {id,title}=this.props.cartItem

        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <h5>{this.props.index+1}</h5>
                    </div>
                    <div class="col-md">
                    <h5>{title}</h5>
                    </div>
                    <div class="col-sm">
                    <button type="button" onClick={()=>this.props.removeCart(id)} class="btn btn-danger">Remove</button>
                    </div>
                </div>
                <hr/>
                <br/>
            </div>

        )
    }
}

export default CartList
