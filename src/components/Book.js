import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Button, Modal, ModalHeader, ModalBody, ModalFooter,Alert} from 'reactstrap'

  class Book extends Component {
      state={
        modal: false,
        isAvailable:true,
      }

      toggle=()=> {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }
    
    render() {
        const {id,title, author, genre, yearofpublication, isInCart}=this.props.book
        const {modal, isAvailable}= this.state
        console.log(isInCart)
        return (               
            <div >
                <img src="http://tiny.cc/kc34dz" alt="book_thumbnail" width="150" />
                <h5>{title}</h5>
                <h6>Genre: {genre}</h6>
                <h6>Author: {author}</h6>
                <h6>Year of Publication: {yearofpublication}</h6>
                <Button color="danger" onClick={this.toggle}>Get Now</Button>
                <Modal isOpen={modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>
                    <h3>{title}</h3>
                    <p style={{fontSize:"15px", color:"blue"}}>by {author}</p>
                </ModalHeader>
                <ModalBody >
                    <div style={{textAlign:"center"}}>
                        <img src="http://tiny.cc/kc34dz" alt="book_thumbnail" width="150"/>
                    </div>
                    <div>
                    <p><em>Genre: {genre}</em></p>
                    <p><em>Published on: {yearofpublication}</em></p>
                    <strong>Short Introduction: </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    {/* <Alert variant="primary">You can add {3-this.props.cartItems.length} books to cart</Alert> */}
                    </div>
                    
                </ModalBody>
                <ModalFooter style={{justifyContent:"center"}}>
                    {isAvailable?
                    <>
                        <Button color="success">Available</Button>
                        <Button color="primary" onClick={this.toggle}>Continue</Button>

                            {isInCart ===true? (
                                <Link to="/cart">
                                <Button color="warning">Check Out ({this.props.cartItems.length})</Button>
                                </Link>)
                                :
                                (this.props.cartItems.length<3 ? 
                                <Button color="warning" onClick={()=>this.props.addtoCart(this.props.book)}> Add to Cart </Button>
                                : 
                                <Link to="/cart">
                                <Button color="warning">Clear Cart ({this.props.cartItems.length})</Button>
                                </Link>)
                            }
                    </>
                        :
                    <>
                        <Button color="danger">Borrowed</Button>
                        <Button color="primary" onClick={this.toggle}>Continue</Button>
                        <Button color="warning" className="disabled">Add to Cart</Button>
                    </>
                    }
                </ModalFooter>
                </Modal>
                <br/><br/>
            </div>
        )
    }
}

export default Book
