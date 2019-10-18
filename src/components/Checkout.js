import React from 'react'
import { BookConsumer } from './Context'
import {Alert} from 'reactstrap'

function Checkout() {
    return (
        <div>
        <Alert variant="primary" style={{textAlign:"center"}}>Successfully checked out , Happy Reading!!!</Alert>
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
                                <h5>Return Date</h5>
                            </div>
                        </div>
                    </div>
                    <hr/>
            <BookConsumer>
                {value=>{
                    return value.cartItems.map(cartItem=>{
                        return (
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                <h5>{value.cartItems.indexOf(cartItem)+1}</h5>
                                </div>
                                <div class="col-md">
                                <h5>{cartItem.title}</h5>
                                </div>
                                <div class="col-sm">
                                <h5>{cartItem.returnDate}</h5>
                                </div>
                            </div>
                            <hr/>
                            <br/>
                        </div>

                    )})
                }}
            </BookConsumer>

            
        </div>
    )
}

export default Checkout
