import React, { Component } from 'react'
import { BookConsumer } from './Context'
import {Link} from 'react-router-dom'
import CartList from './CartList'

export class Cart extends Component {
    render() {
        return (
            <div>
                <br/>
                <h2 style={{textAlign:"center"}}>Books in Your Cart</h2>
                <br/><br/>
                <div class="container">
                <div class="row">
                    <div class="col-sm">
                    <h5>S.No</h5>
                    </div>
                    <div class="col-md">
                    <h5>Book Name</h5>
                    </div>
                    <div class="col-sm">
                    <h5>Action</h5>
                    </div>
                </div>
                <hr/>
                
                <BookConsumer>
                    {(value=>{
                        return value.cartItems.map((cartItem, index)=>{
                            return <CartList key={cartItem.id} index={index} removeCart={value.removeCart} cartItem={cartItem}/>
                        })
                    })}
                     </BookConsumer>
                     <BookConsumer>
                     {(value=>{
                        return value.cartItems.length===0 ? "Cart is Empty! Add some books..." : (<Link to="/Checkout"> 
                            <button type="button" class="btn btn-primary" onClick={()=>value.checkOut(value.cartItems)}> 
                            Check Out  </button> </Link>)
                    })}
                     </BookConsumer>
                     
               
                
            </div>
            </div>
        )
    }
}

export default Cart
