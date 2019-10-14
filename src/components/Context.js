import React, { Component } from 'react'


const BookContext = React.createContext()


class BookProvider extends Component {
state = {
            books:[],
            isLoaded:false,
            cartItems:[]
        }

    componentDidMount(){
        fetch("https://api.myjson.com/bins/1eeg2m")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                books:data,
                isLoaded:true,
                error:null
            })
        },
        (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          )
    }

    onAddCart=(book)=>{
        book.isInCart = true;
        const cartItem=this.state.cartItems.find(cartItem=>cartItem.id===book.id)
        !cartItem && this.setState(({cartItems:[...this.state.cartItems,book]}));
        
         
    }


    onRemoveCart=(id)=>{
        console.log("Removed", id)
        const cartItems=this.state.cartItems.filter(cartItem=>cartItem.id !==id);
        this.setState({cartItems:cartItems})
         
    }
    
    render() {
        console.log(this.state.books)
        return (
            <BookContext.Provider value={{...this.state,addtoCart:this.onAddCart, removeCart:this.onRemoveCart}}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

const BookConsumer = BookContext.Consumer;

export {BookProvider,BookConsumer}
